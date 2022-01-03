---
title: Move Home Folder
description: >
    How to change the mount location of the /home folder.
keywords:
  - Partition
  - Home Folder
  - LVM
  - Disk Encryption
  - Cryptsetup
  - Home
  - /home
  - Encryption
  - Extra Drive

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: software
tableOfContents: true
---

## Default Location of the Home Folder

By default, home folder is located on the same drive as root. On Pop!\_OS, the default root partition is on the third partition. The home folder for all users (except root) is located in `home`

## Moving the Home Folder

Some users may prefer their home folder to be separate from the root partition. This can be useful for reinstalling the OS without affecting personal files. To do this, the OS needs to be told the new mount point of the `home` folder. The following steps detail how to safely change the mount point of the `home` folder.

**NOTE:** The `Refresh Install` option provided in the [Pop!\_OS Recovery partition](/articles/pop-recovery) (or a Pop!\_OS [Live Disk](/articles/live-disk)) will reinstall system files without deleting the contents of `home`.

### Backup Home Folder

**CAUTION:** Do not attempt to move the `home` folder without having your personal files backed up. It is recommended to have your files backed up on a separate drive or cloud location before changing the `home` folder. We have instructions on creating backups [here](/articles/backup-files)
You can create a local backup of the existing `home` folder (see below) while making changes, but this should not be considered a substitute for having a robust backup solution.

Rename the `/home` folder to anything else (for example, `/home-bak`) using the following Terminal command:

```bash
sudo mv /home /home-bak
```

Once the contents of the `home` folder have been moved out of the way, we can set a new `home` location on either another disk, or another disk partition.

### Moving the Home Folder to Another Drive

By default, secondary drives that ship with System76 systems are labeled `Extra Drive 1`, `Extra Drive 2`, etc.

Set the extra drive to mount to `/home` at boot.

**GNOME Disks**

1. Find the drive in the list on the left, and select it
2. Select the partition you want to be the `home` partition (likely the only partition) in the "Volumes" section
3. Click the Gear icon below the partitions
4. Select `Edit mount options`.
5. Turn off "User Session Defaults"
6. In the `Edit mount options` submenu, the following options should be set:
    - Mount at system startup -- Checked
    - Show in user interface -- Unchecked (If this is checked, you will see your home directory twice in the Files app)
    - Require additional authorization to mount -- Unchecked
    - Mount Point: `/home`

 7. Click "OK"

 8. Mount the new home partition to `/home`

    Press the Play button under the partitions listed in the "Volumes" section.

### Moving the Home Folder to Another Partition

By default, Pop!\_OS uses the entirety of remaining disk space for the root `/` folder. To use another drive partition for the `home` folder, the OS partition will need to be shrunk, and a new partition created.

### Non-encrypted Drive

1. Boot into [Pop!_OS Recovery](articles/pop-recovery) or a [Live Disk](/articles/live-disk)

    Turn your computer off, then turn it back on and hold down the `SPACE` bar immediately. In the menu that appears, select `PopOS Recovery`, and let it boot.

    Once it boots, close out of the installation window or choose `Try Demo Mode` (be sure not to choose any install or repair options, as this could result in data loss. It will also mount the drive and make the next steps harder).

2. Open `GNOME Disks` by clicking `Activities`/`Applications` and searching for "Disks" or by pressing `SUPER`+`T` to open a Terminal, and running:

    ```bash
    disks
    ```
    
3. Reduce the size of the `root` volume by the size of your desired `home` folder. It is recommended to leave at least 30GB for the OS and installed applications, adjust according to your needs.

4. Once the partition has been shrunk, [format](/articles/format-drive) the remaining empty space as `ext4` ("For Linux Filesystems").

5. Select `Edit mount options` for the new partition.

6. Turn off "User Session Defaults"

7. In the `Edit mount options` submenu, the following options should be set:
    - Mount at system startup -- Checked
    - Show in user interface -- Unchecked (If this is checked, you will see your home directory twice in the Files app)
    - Require additional authorization to mount -- Unchecked
    - Mount Point: `/home`

8. Click "OK"

9. Mount the new home partition to `/home`

    Press the Play button under the partitions listed in the "Volumes" section.

### Encrypted Drive

1. Boot into [Pop!_OS Recovery](articles/pop-recovery) or a [Live Disk](/articles/live-disk)

    Turn your computer off, then turn it back on and hold down the `SPACE` bar immediately. In the menu that appears, select `PopOS Recovery`, and let it boot.

    Once it boots, close out of the installation window or choose `Try Demo Mode` (be sure not to choose any install or repair options, as this could result in data loss. It will also mount the drive and make the next steps harder).

2. Open `Gparted` by clicking `Activities`/`Applications` and searching for "Gparted" or by pressing `SUPER`+`T` to open a Terminal, and running:

    ```bash
    gparted
    ```

3. Open the encrypted partition using these Terminal commands:

    | **SATA Drives**                                    | **NVMe Drives**                                   |
    |:--------------------------------------------------:|:-------------------------------------------------:|
    | ```sudo cryptsetup luksOpen /dev/sda3 cryptdata```       | ```sudo cryptsetup luksOpen /dev/nvme0n1p3 cryptdata``` |

    ```bash
    sudo lvscan
    sudo vgchange -ay
    ```

4. Reduce the size of the `root` volume by the size of your desired `home` folder. It is recommended to leave at least 30GB for the OS and installed applications, adjust according to your needs. In this example we're freeing up 50GB for `home`. To resize the LVM volume, use these Terminal commands:

    ```bash
    free -h
    sudo lvreduce -r -L-50G /dev/mapper/data-root
    ```

5. Create a `home` volume (instead of a drive partition):

    ```bash
    sudo lvcreate -L 50G --alloc contiguous --name home data

6. Mount the `root` filesystem and edit `crypttab` and `fstab` to update for the new `home` location:

    Mount the `data-root` volume:

    ```bash
    sudo mount /dev/mapper/data-root /mnt
    ```

    Edit `crypttab` to add the new `home` partition entry.

    ```bash
    sudo nano /mnt/etc/crypttab
    ```

    Open `fstab` to copy the UUID of the `home` volume.

    ```bash
    sudo nano /mnt/etc/fstab
    ```

    Add the UUID of the `home` volume to the `crypttab` file.
    Save and close the file.

## Move Home Files Back

If you made a local copy of the files in your original `/home` folder, next, copy the files from `/home-bak` to `/home`

### Rsync

We recommend using `rsync` for this, as it will make sure the permissions and attributes for all the files are kept while copying your files.

Without `rsync` preserving permissions, some applications may behave strangely, or some files may be (until permissions are changed) inaccessible.

**NOTE:** Make sure the first location ends with a `/`. This will copy the contents of `/home-bak` into `/home`. Without this trailing `/`, you will end up with the `/home-bak` folder copied into `/home` (e.g. `/home/home-bak`).

```bash
sudo rsync -avhx  /home-bak/ /home
```

Reboot your system to test that the changes are working. Verify your data is present in the new, now current, `home` directory

### Delete `/home-bak`

To remove the local backup of the `home` folder open a terminal and run:

```bash
sudo rm -rf /home-bak
```

## Backups (Deja Dup)

If, instead of a creating a local backup of the existing `home` folder, your personal files have been backed up to an external drive or cloud location using `Backups`, we can now use its `Restore` feature to move the former `home` folder files back.

We have an article on creating backups using `Deja Dup` [here](), and you can read more about restoring `Deja Dup` backups in [this article]().