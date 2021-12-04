---
title: Release Notes for Pop!_OS
description: >
  Release notes by version and links to source-code.
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

<!--These are features which have been implemented during the 19.10 release cycle, leading up to 20.04. -->

[View Release Notes on Github](https://github.com/pop-os/upgrade/tree/master/changelogs)

## Pop!_OS 21.10

* 5.15 kernel
* New Applications view/launcher
* Rust based continuous integration (CI)  for Pop!OS specific packages

### Pop Shell

### GNOME 40.4

### Linux Kernel 5.15

## Pop!_OS 21.04

Pop!_OS 21.04 was released on June 29, 2021.

### COSMIC Desktop - Computer Operating System Main Interface Components

* Pop Shell Launcher is now the default method for opening/switching applications
* The Activities overview has been split into separate Workspaces and Applications views for clearer navigation
* Users can now configure their preferred default experience during the initial setup customizing it for their workflow
* An application dock is now available for easy launching and switching of applications
* The minimize button is now shown by default
* Settings for COSMIC Desktop are integrated directly with System Settings, under a new "Desktop" section

### Pop Shell

* Improvements to Launcher search to better match a wider range of applications and recent files
* Launcher now displays 7 search results to avoid growing too large on displays with low vertical space
* Launcher gained plugin support, bringing along support for file navigation, recent document searching, and tab auto-completions
* Levenshtein distance sorting algorithm added for improving search result quality
* Right clicking an application in search results now offers a context menu with an option to launch with dedicated graphics
* Closing the active window in the Launcher with Ctrl + Q
* Ability to tile and stack windows with the mouse
* Various minor usability improvements and features

* Recovery Partition Upgrades - Pop!_OS Recovery Partitions can now be upgraded to a newer version of Pop!_OS

* Updated system-level components and packages

* Stability and performance improvements for Pop!_Shop

* Linux Kernel 5.11

## Pop!_OS 20.10

Pop!_OS 20.10 was released on October 22, 2020.

* System apt sources have been converted to DEB822 sources format. Repoman was updated to take advantage of this in order to support defining mirrors for system sources.

* System76 Power now supports a compute graphics mode. This is useful to prevent any applications from accessing it for display output, but leaving it available for CUDA and OpenCL applications.

* NVIDIA driver updates enabled Reverse PRIME support. This allows for external displays to be used while on Intel graphics in Hybrid graphics mode.

* Redesign of keyboard panel in collaboration with GNOME. Adds support for managing multiple bindings for a shortcut.

* Popsicle was released as a flatpak on Flathub, for the benefit of other Linux distributions.

### Pop Shell

* Added ability to hide window title bars in X11 sessions. These windows can still be dragged by holding `Super` and dragging from anywhere within the window.
* Added ability to change active hint colors, which also changes the window overlay and stack tab colors.
* Added dialogs for managing floating window exceptions, which enable defining certain applications or windows to always float.
* Added smart gaps behavior to extension preferences, which hides the outer gap when there is only one window on a work area.
* Added a new stacked tiles feature, which permits stacking multiple windows into the same tile, and switching between them via a tab header. This can be toggled on any window node in the tree by pressing `Super` + `S`.
* Many fixes and improvements have been applied throughout the release, with more to come post-release

### GNOME 3.38

* The session panel menu now has a new Restart option
* The Application Grid is now more compact, and scales based on screen dimensions and resolution.
* Improved responsiveness, less stuttering, and better animations
* WiFi settings now show a QR code for sharing your Wi-Fi Hotspot with mobile devices
* Option to show battery percentage
* Screenshot and Sound Recorder had a visual refresh
* New parental controls feature after adding child accounts
* Tracker has moved to a distributed database model, with improved performance and Flatpak support

### Linux Kernel 5.8

---

## Pop!_OS 20.04

Pop!_OS was released on April 29, 2020

### Important: To advance keyboard driven navigation, [keyboard shortcuts](/articles/pop-keyboard-shortcuts) have changed

* Lock Screen is now Super + Escape
* Move to Workspace Up or Down is now Super + Ctrl + Up/Down Arrow or K/J
* Close Window is now Super + Q
* Toggle Maximize is now Super + M

* Dark mode is enabled by default. Go to Appearance in Settings to change between light and dark mode.

* Automatic Window Tiling: To activate tiling mode, click the tiling menu icon at the top right of the screen and toggle on Tile Windows. Open and newly launched windows will be automatically tiled. Toggling off Tile Windows will revert to floating mode.

* New Application Switcher and Launcher:  Type `Super` + `/` to activate the new application switcher and launcher. Instead of `Super` + `Tabbing` through application icons, simply type `Super` + `/` and start typing the name of the application you want to switch to or launch.

* Flatpak support with the Flathub Repository:  Pop!_Shop now includes Flatpak application support and the Flathub application repository by default. The source of applications is visible when viewing applications details.  System76 continues to curate and package key applications such as Steam, Atom, and VS Code. Pop!_OS repositories are prioritized to provide the best user experience for these applications.

* Hybrid Graphics: Customers with integrated and discrete graphics can now choose Hybrid Graphics from the battery section of the user menu. While in Hybrid Graphics mode, right clicking an application in the Activities overview offers a "Launch Using Dedicated Graphics Card" option. This enables customers to use battery-saving integrated graphics while launching specific apps on the dedicated GPU.

* Application Indicators: Application indicators are now present at the top right of the desktop by default.

* More Accessible Pop!_Picks: Pop!_Shop now loads up to 20 Pop!_Picks making highlighted applications more accessible. These are curated and preferred applications tested to provide the best experience.

### GNOME 3.36

* New lockscreen
* Additional performance improvements
* New Extensions application to manage GNOME Shell extensions and their settings
* Better organized power off / logout section in the user menu
* Most password dialogs now have the option to reveal the password by clicking the "eye" icon
* App folders in the application overview can now be renamed
* GNOME Settings sections have been rearranged for easier navigation
* The privacy section now lists applications that have been granted permission to access location services, camera and microphone. Access can be revoked on a per-app basis.
* The user and about sections both received an interface redesign. Both are more explicit in their presentation of information, and make changing settings easier.

### Linux Kernel 5.4

---

### Contributions to upstream projects

### Rust Crates

Contributions to Rust crates which we rely on in our software

* [futures-codec](https://github.com/matthunz/futures-codec/pull/36): Added `Decoder::decode_eof` method
* [http-client](https://github.com/http-rs/http-client/pull/14): Fixed an issue with GET requests sending an empty body
* [pbr](https://github.com/a8m/pb/pull/92): Made the `MultiBar` thread-safe, enabling bars to be added dynamically over time

### Packaging

* Packaged the [NVIDIA Codec SDK](https://github.com/pop-os/nvidia-video-codec)
* ffmpeg was rebuilt with NVENC support, enabling NVENC in OBS
* Chromium is now being built from Debian sources with VAAPI HW decode support

### Popsicle

* The CLI has been rewritten around asynchronous I/O, which significantly reduced memory use.
  * We previously used one thread per USB device being flashed -- now we only need one
  * Which required 68 MiB to flash 3 devices, instead of the 4 MiB today
* The CLI now outputs a stream of machine-readable RON events when stdout is not a TTY.

### Pop Upgrade

* Moved the GTK widget from the Info Overview to a new Upgrade panel in GNOME Settings
* Added a refresh OS section to the upgrade panel
* Support for recovery upgrades
* Support for cancelling a recovery upgrade
* Misc. improvements to fix common issues and increase success rates

### Rust Crate Releases

New Rust crates that we've developed and released

* [as-result](https://github.com/pop-os/as-result): AsResult / IntoResult traits, with ExitStatus handling
* [async-fetcher](https://github.com/pop-os/async-fetcher): asynchronous file fetcher
* [deb-changelog](https://github.com/pop-os/deb-changelog): Zero-copy parser and futures codec for debian's changelog format
* [deb-control](https://github.com/pop-os/deb-control): Zero-copy parser and futures codec for debian's control file format, used in most Debian files
* [deb-diversion](https://github.com/pop-os/deb-diversion): Futures codec for Debian's `dpkg` diversion file
* [gtk-extras](https://github.com/pop-os/gtk-extras): Common GTK widgets, functions, and behaviors across our GTK projects
* [pidfd](https://github.com/pop-os/pidfd): Linux (>= 5.3) process ID file descriptor support
* [srmw](https://github.com/pop-os/srmw): asynchronous single-reader, multi-writer
* [usb-disk-probe]: asynchronous USB disk device prober for Linux
* [fd-reactor]: A simple async reactor for `libc::poll`ing file descriptors and waking up task executors

### System76 Power

* Upgraded from `dbus-rs` 0.6 to 0.7 (adds support for async I/O)
* Support for hybrid graphics switching, to keep the GPU powered off until an application requests it

### Flatpak Support

With the open source ecosystem increasingly relying upon Flatpak as a distribution model by application developers on the Linux desktop, it is important to bring that support to Pop!_OS out of the box. This entails:

* Having Flatpak installed by default, with the Flathub source repository
* Adding Flatpak repo support in Repoman, our tool for managing apt repositories
* Ensuring that the Pop!_OS Repo is listed as a 1st party in Repoman
* Updating the Pop!_Shop to bring in Flatpak support from elementary
* Fixing the display of app sources so that Pop's repository has higher priority

---

## Pop!_OS 19.10

Pop!_OS 19.10 was released on October 22nd, 2019.

### Packaging

* The `linux-system76` package now provides a kernel that is shared between all supported releases

### Pop Upgrade

The upgrade daemon was released in the days leading up to the 19.10 release. The features of the
upgrade daemon include:

* A DBus daemon for carrying out checking for release upgrades and setting them up
* A systemd offline-update service which the upgrade daemon prepares for the next boot
* A desktop notification service which runs as the user, to provide desktop notifications
* A CLI and GTK frontend for interacting with the DBus daemon
* Integration inside of GNOME Settings for the GTK widget

### System76 Power

* Support for NVIDIA hybrid graphics was added to the daemon

---

## Pop!_OS 19.04

Pop!_OS 19.04 was released on April 18th, 2019.

### Installation

* A handful of bugs were reported and fixed during this cycle.
* A few additional system checks were added to prevent incompatible installation setups.
* EFI partitions now require at least 500 MiB, to decrease the likelihood of issue reports
  consisting of no-space-left errors.

### Packaging

The following packages were added / updated during this release.

* GameHub
* Geary 3.32 backported to bionic and cosmic
* GNOME Authenticator
* GNOME Podcasts
* Lollypop
* Lutris
* PulseEffects
* Steam 1.0.0.59

### Popsicle

* The GTK UI was rewritten using a better architecture for UI app development.
  * The code is now easier to maintain, due to being less complex, and having less of it.
  * UI is now more responsive than before, so the chance of the UI hanging is now impossible.
* A bug was fixed that would cause systems with card readers to indefinitely hang.

### Refresh OS Installations

Two features have been developed during this cycle: "Refresh" and "Alongside OS" installation
options. The refresh feature was the first to be complete, providing the ability to retain
user accounts and files while reinstalling the OS. The alongside OS option will follow shortly
after.

### System76 Power

* Fan controls have been improved in this release.
* The daemon now actively knows which state is currently set.
* Signals to listening clients are now sent when the power profile is changed.

### Upgrade Daemon

Due to the many issues experienced with Ubuntu's `do-release-upgrade` script, a new project was
started during this cycle to improve the reliability of release upgrades. This daemon is
responsible for performing system repairs and preparing the system for a release upgrade.

* Adds the ability to upgrade the recovery partition.
* Adds the ability to perform a release upgrade offline with systemd and the recovery partition.
* Offline installs with systemd will boot into a minimal environment to perform the upgrade,
  and reboot when finished.
* As with `system76-power`, it provides a CLI frontend in the same binary that the daemon
  launches from.
* Some limited forms of repairing possible system errors that would prevent a release upgrade.
* Provides a daemon that can be used to check for release upgrades

---

## Pop!_OS 18.10

Released on October 20th, 2018, the focus of development was furthered improvements to the
reliability and feature set provided by our distribution installer; the addition of many third
party applications, including Tensorflow; and the inclusion

### Installation

* All bugs reported against the new installer were fixed during this cycle.
  * Many system checks were added to prevent incompatible installation setups.
  * A new crate for managing keyboard and language locales was developed.
  * Setting the correct keyboard layout for the cryptsetup screen was fixed.
* Various portions of `distinst` were separated into multiple crates.
* Improved support for detecting required packages based on installation configuration, and
  removal of packages which are not necessary for that configuration.

### Packaging

* `debrep` was created to experiment with building our own apt repositories from a TOML spec.
* A third party repository was created from `debrep` for storing packages fetched from third
  party resources, as well as NVIDIA and Tensorflow packaging.
* Many popular applications were added to the repositories, with more to come in the future.

### Pop!_Shop

* Various actions throughout the UI would cause the application to hang. Patches were submitted
  upstream to elementary to prevent the UI from freezing.
* A patch for a screenshot cache and parallel fetching of screenshots was also submitted.

### System76 Power

* Fan controls were added, with support for Thelio's I/O boards.
* The CLI now handles arguments via the `clap` crate, to provide a quality user-friendly interface.
* A new `--experimental` flag was added for the daemon to launch with additional `Powertop` and
  TLP-recommended power-saving options.

---

## Pop!_OS 18.04

Released on April 26th, 2018, the focus of development was a new installer that supports encrypted
installations, integration of the Pop!\_Shop, the addition of a multiple USB file flasher utility
(Popsicle), and overall improvements to the desktop experience.

### HiDPI Displays

* Package the system76-driver HiDPI daemon separately for Pop!_OS (<https://github.com/pop-os/pop/issues/98>)
* Create a setting toggle in GNOME Settings Display (<https://github.com/pop-os/pop/issues/97>)
* Correct the projector shortcut issue (<https://github.com/pop-os/pop/issues/96>)

### Installation

Develop a simple and fast installer that introduces users to Pop!_OS and enables System76 to ship full disk encryption on hardware out of the box.

* Installer backend (<https://github.com/pop-os/distinst>)
* Installer frontend (<https://github.com/pop-os/installer>)
* GNOME Initial Setup (<https://github.com/pop-os/gnome-initial-setup>)
* On detection of system76 hardware, the `system76-driver` package is installed.
* With the NVIDIA ISO on non-NVIDIA hardware, the nvidia drivers are removed.

### Pop!\_Shop

* Add Pop!_OS banner to the home page
* Setup a server for curated apps
* Determine best-of-class applications and tools for each category
* Button to launch applications after installing
* Fix issue - applications are listed in reverse order (<https://github.com/pop-os/shop/issues/7>)

### System76 Power

* A new daemon was developed that provides and controls power profiles.
* Added a shell extension to provide the UI options in the desktop to control these profiles.
  * These controls are only displayed if a battery is detected on the system.

---

## Pop!_OS 17.10

17.10 was released October 19th, 2017. It is the current release. Struck through work was completed. This is the first Pop!_OS release and focuses on first use experience, appearance, and default applications.

### Appearance

* Plymouth work for smooth and beautiful boot to login transitions
* Pop!\_Theme refinement
* GDM Theme

### Determine Default applications

* Choose an email client for the initial release
* Determine pre-installed applications

### Installation

* Add a feature to Ubiquity to toggle between "minimal" and "complete" Ubiquity. Pop!_OS will use minimal while other Ubuntu flavors can use the complete. Paired down Ubiquity to a minimal set of screens and packaged separately.
* Use GNOME Initial Setup for user configuration
* Add nvidia driver to the installation media
