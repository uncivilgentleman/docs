---
title: Roadmap and Release Notes for Pop!_OS
description: >
  Focus and features for each release!
keywords:
  - Support
  - Development
  - System76

facebookImage: /_social/article
twitterImage: /_social/article

hidden: false
section: pop
tableOfContents: true
---

This roadmap details features which are currently-planned to be implemented in Pop!_OS, as well
as major features which were added to Pop!_OS during previous release cycles. Only features
specific to Pop!_OS will be listed here. To see how features are chosen, see the
[Pop!_OS Development Approach page](/articles/pop-os-development-approach/).

However, note that feature development in Pop!_OS is not exclusive to any particular point release,
as we follow a rolling-release strategy for updates to projects which we maintain. This means that
features are added to Pop!_OS as soon as they are finished, instead of being withheld to the next
point release. When features are completed, they are added to the latest "stable" and
"long term stable (LTS)" point releases, whenever possible.

---

## Currently-Planned Features

These are features which we would either like to, or are already in the process of, implementing.
As these are completed, they will be listed underneath a release cycle, indicating which cycle the feature was implemented during.

When a feature is listed as being implemented during the 20.04
release cycle, this means that it was completed before 20.04 was released, and thus was available
on release for 20.04.

### Async Fetcher

A new Rust crate built around asynchronous I/O, using Rust's async / await syntax. This project will be used across all Pop!_OS and System76 projects for caching, fetching, and validating files fetched from HTTP/S file servers. Features shall include:

* Built around `futures03` streams
* Concurrently fetching multiple files at the same time
* Using multiple concurrent connections per file (as parts) to increase throughput
* Using multiple mirrors to fetch different parts of the same file from
* Defining minimum and maximum part size
* Defining maximum requests per peer, and maximum number of files to fetch concurrently
* Checking modified timestamps and content length to determine when fetching is required
* Optional checksum validation (MD5 / SHA256)
* Cancellation, timeout, and retry handling
* Resumable downloads, when a download is interrupted
* Command line client with IPC and RPC support, w/ process isolation support

The current goal is to use this for:

* Rapidly synchronizing apt source lists
* Speedily fetching & validating debian packages
* Fetching the recovery ISO, which would benefit from resumable downloads
* Creating a useful tool for our open source community

### GNOME Online Accounts

* Add additional providers to GNOME Initial Setup (CalDav & CardDav)
* Patch GNOME Calendar and GNOME Contacts for these new providers

### Hybrid Graphics

* Switch to specify running applications on the discrete GPU in GNOME Settings
* Patch Steam and other Pop maintained and supported applications with a graphics preference description in the desktop file
* Documentation to help the community identify apps that don't support hybrid graphics and details on how developers can add support
* Add right click app icon option > Application Settings

### Installer

* Alongside OS installation option

* Resizing LUKS and LVM partitions

* Create Rust bindings for `blkid`, `devmapper`, and `cryptsetup`
* Create Rust crates for disk-probing and management
* Separate disk management from the installer
* Providing `distinst` as a daemon for the installer
* Enabling Wayland support for the installer
* Support for exotic LUKS and LVM combinations
* LVM snapshot support
* Support for ZFS and its special features

### Packaging

~~* Move away from Launchpad and host our own apt repositories~~

~~* Rewrite our packaging CI in Rust~~

* Support periodic watching of repositories for commits to be built

* Support distributing package builds to multiple build servers
* Possibly support a web interface for managing the repository and build servers

### Pop!_OS General

* Add changelogs to projects using a changelog generator based on [conventional commits] (we may have to build this tool ourselves)
* Change LSB descriptions to Pop for 20.04
* Smooth codec installation
* Remove System76 driver for System76 hardware customers. Integrate necessary information and features into the desktop.
* Pop features in GNOME Settings > About for the new GNOME 3.36 panel design
* Transition Thelio I/O firmware updates to LVFS

~~* Battery threshold settings for System76 hardware with open firmware~~

~~* Keyboard configuration utility for System76 hardware with open firmware~~

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/ 

### Pop!_Support

Create a utility for our support team and users, which contains:

* Common repair functions for automatically repair common issues
* Automatic mounting and chrooting for repairing an install
* Generation of logs to send to the support team

### Pop!_Upgrade

~~* Add support for updating the recovery partition~~

~~* Add support for refreshing the OS from GNOME Settings~~

* Reduce the bandwidth required to update the recovery partition

~~* Switch to using asynchronous I/O for all network connections~~

* Replace all usage of `futures01` & combinators with `futures03` & async/await

~~Improve handling of network timeouts by integrating our `async-fetcher` crate~~

* Upgrade to `dbus-rs` 0.7, and investigate handling requests in an async fashion

### Popsicle

* Support for creating bootable Windows 10 drives
* Imaging from an existing drive to many other drives
* Updating the GTK code to use new practices that we've developed
* Add support for asynchronous I/O in the GTK frontend
* Change the way the GTK frontend works so that Flatpak can be supported
* Internationalization support, with [Project Fluent](https://projectfluent.org/).

### System76 Power

* System76 Power settings in GNOME Control Center
* Configurable power profiles in a simple configuration format
* Support for handling AC plug events, with configurable thresholds
* Power profiles for non-Intel processors
* Investigate handling DBUS requests in an async fashion
* AMD integrated / NVIDIA dedicated graphics switching
* AMD integrated / AMD dedicated graphics switching
* Intel integrated / AMD dedicated graphics switching

### Tensorman

* Backport Docker and Tensorman to 18.04 LTS
* AMD GPU support with ROCm (requires packaging ROCm?)

---
