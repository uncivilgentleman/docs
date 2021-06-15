__NUXT_JSONP__("/articles/bluetooth", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{article:{slug:C,description:"Here is how to fix several common Bluetooth issues with your computer.\n",layout:"article",title:D,keywords:[C,"mouse","audio"],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fsystem76.png",hidden:false,section:"network-troubleshooting",toc:[{id:E,depth:n,text:F},{id:G,depth:n,text:H},{id:I,depth:n,text:J},{id:K,depth:n,text:L},{id:M,depth:n,text:N},{id:O,depth:n,text:P},{id:Q,depth:n,text:R},{id:S,depth:n,text:T},{id:U,depth:n,text:V},{id:W,depth:n,text:X},{id:Y,depth:n,text:Z},{id:_,depth:n,text:$}],body:{type:"root",children:[{type:b,tag:x,props:{id:"important-notes-about-bluetooth"},children:[{type:b,tag:h,props:{href:"#important-notes-about-bluetooth",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Important Notes About Bluetooth"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth is a bit odd.\nThere are a lot of factors that go into whether Bluetooth devices work together as expected."}]},{type:a,value:c},{type:b,tag:o,props:{id:E},children:[{type:b,tag:h,props:{href:"#bluetooth-version",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth 5.0 is backwards compatible with older Bluetooth versions, but older bluetooth versioned devices are not always compatible with newer versions or devices."}]},{type:a,value:c},{type:b,tag:o,props:{id:G},children:[{type:b,tag:h,props:{href:"#signal-interference",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth uses the same bandwidth as the 2.4Ghz Wi-Fi band, and in most of our machines it is on the same chip as the Wi-Fi module. They usually have two antennae, one for Bluetooth, and one for Wi-Fi, but it is possible for other Wi-Fi or Bluetooth devices signals to cross and to cause connection issues. If users are in an area crowded with other Wi-Fi networks or devices, the interference from these outside sources can impact performance and range."}]},{type:a,value:c},{type:b,tag:o,props:{id:I},children:[{type:b,tag:h,props:{href:"#device-specific-differences",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Every Bluetooth device is different. They use the same or similar protocols, but the printed circuit boards (PCBs), are specific to each device, and the firmware they are running is often custom designed, and closed-source."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Some of the code and technologies that make Bluetooth work reliably are patented, and only device vendors who have licensed the permission to use that patented technology will be able to experience the full benefits (for more information see the \"Audio Input\u002FOutput\" section below.)"}]},{type:a,value:c},{type:b,tag:aa,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:B}]},{type:a,value:" Some devices, such as Apple or Sony headphones, particularly take advantage of these patents and technologies to ensure they work well with similar devices. Often these devices are not tested against Linux machines. That doesn't mean these devices will not work, only that behavior or performance may vary."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:K},children:[{type:b,tag:h,props:{href:"#kernel-versions",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"As the Linux kernel develops, support for more devices are added. Sometimes Bluetooth devices will work better in a different kernel version."}]},{type:a,value:c},{type:b,tag:o,props:{id:M},children:[{type:b,tag:h,props:{href:"#os-versions",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Similar to the kernel versions. Improvements are often made in newer versions of Ubuntu and Pop!_OS. Running software updates is always a good idea, followed by a reboot."}]},{type:a,value:c},{type:a,value:c},{type:b,tag:o,props:{id:O},children:[{type:b,tag:h,props:{href:"#configuration-issues",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Sometimes Bluetooth devices are working correctly, but something in settings needs to be reset."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The easiest way to test this is to \"forget\" the paired Bluetooth device, and pair it again."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"A more thorough way of testing this would be to create a "},{type:b,tag:ab,props:{to:"\u002Farticles\u002Fother-accounts"},children:[{type:a,value:"test user"}]},{type:a,value:", or boot from a "},{type:b,tag:ab,props:{to:"\u002Farticles\u002Flive-disk"},children:[{type:a,value:"Live Disk"}]},{type:a,value:" to see if Bluetooth works in either case.\nIf it does, config files may need deleted. If it doesn't (especially in the Live Disk), reinstalling the OS may solve the problem.\nReinstalling the OS won't affect Bluetooth hardware directly, but resetting and starting with a clean slate can solve a slew of problems and save time hunting for a specific file or bug."}]},{type:a,value:c},{type:b,tag:x,props:{id:"setting-expectations"},children:[{type:b,tag:h,props:{href:"#setting-expectations",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Setting Expectations"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Because of all of these factors, if the steps outlined in the Bluetooth troubleshooting article, and the previous troubleshooting steps don't resolve the issue, the issue may not be resolved at all.\nOr, in a future update or change to the system, the devices may start working again. In some cases (many cases) users will not experience any issue with Bluetooth at all."}]},{type:a,value:c},{type:b,tag:o,props:{id:Q},children:[{type:b,tag:h,props:{href:"#audio-inputoutput",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth audio devices, such as headphones and speakers, usually default to the A2DP protocol, which works effectively as an audio output source."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth devices with microphones built in, can be used if the device supports HFP\u002FHSP. However, without the technology that companies like Sony have patented, the solution is to divide up the audio stream so that some of it is used for audio out and some for audio in.\nThis process lowers the sound quality of the stream when in HSP\u002FHFP mode, so audio may be \"tinny,\" compressed (lower-fidelity), or at a lower volume. That is expected behavior."}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:x,props:{id:"bluetooth-troubleshooting"},children:[{type:b,tag:h,props:{href:"#bluetooth-troubleshooting",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Bluetooth issues can be troubleshooted in several ways.  The first thing to check is toggling airplane mode which will sometimes get Bluetooth functioning again.  Next, make sure Bluetooth is enabled in the top bar, or in the "},{type:b,tag:w,props:{},children:[{type:a,value:ac}]},{type:a,value:" system settings."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then, try reinstalling Bluetooth related software with this command:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:z}]},{type:a,value:" --reinstall bluez gnome-bluetooth indicator-bluetooth pulseaudio-module-bluetooth\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:B}]},{type:a,value:" After reinstalling the above packages, fully shut down the machine and then power it back on, rather than rebooting. This ensures the hardware completely resets."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If "},{type:b,tag:m,props:{},children:[{type:a,value:"tlp"}]},{type:a,value:" is installed, then there may be settings interfering with Bluetooth functionality.  Edit this file and disable Wifi and Bluetooth power saving features:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" gedit \u002Fetc\u002Fdefault\u002Ftlp\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{id:S},children:[{type:b,tag:h,props:{href:"#useful-programs",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There is a program called "},{type:b,tag:w,props:{},children:[{type:a,value:ad}]},{type:a,value:" which is included with "},{type:b,tag:w,props:{},children:[{type:a,value:"XFCE"}]},{type:a,value:". It can sometimes pair and trust Bluetooth devices better than the default "},{type:b,tag:w,props:{},children:[{type:a,value:ac}]},{type:a,value:" settings. Install it with:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:z}]},{type:a,value:" blueman\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then, run "},{type:b,tag:w,props:{},children:[{type:a,value:ad}]},{type:a,value:". Check for the device being trusted, and also try re-pairing in that program."}]},{type:a,value:c},{type:b,tag:o,props:{id:U},children:[{type:b,tag:h,props:{href:"#useful-commands",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"lsmod "},{type:b,tag:d,props:{className:[f,ae]},children:[{type:a,value:af}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:ag}]},{type:a,value:" bluetooth\n"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:"dmesg"}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,ae]},children:[{type:a,value:af}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:ag}]},{type:a,value:" Bluetooth\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"These will show if the Bluetooth module (driver) is loaded, and what the system messages are."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" systemctl status bluetooth\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This will check to see if the service that handles Bluetooth is running."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"rfkill list\n"},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" rfkill unblock bluetooth\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If both Bluetooth and Wireless are soft blocked or if the Wireless is soft blocked run this command to unblock:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" rfkill unblock all\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This will check to see Bluetooth is blocked, and if so, unblock it."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"pactl load-module module-bluetooth-discover\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This will load the PulseAudio module responsible for Bluetooth Audio.  Typically, it's loaded by default, but sometimes a manual loading can get Bluetooth headsets working again."}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" btmon\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"This will show all Bluetooth related messages.  Try leaving this command running while pairing or using a device to see any error messages or failures."}]},{type:a,value:c},{type:b,tag:x,props:{id:"additional-info"},children:[{type:b,tag:h,props:{href:"#additional-info",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:"Additional Info"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Here are a few additional tidbits about the Bluetooth system that may help with troubleshooting."}]},{type:a,value:c},{type:b,tag:o,props:{id:W},children:[{type:b,tag:h,props:{href:"#controlling-audio",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once you are connected to a Bluetooth speaker, you may need to change where your current audio is \"routed\". You can get a more advanced interface to settings on audio with the program called PulseAudio Volume Control. To install, run this command:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:z}]},{type:a,value:" pavucontrol\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"There will be a drop-down in the Playback tab for each of your applications that is outputting sound that you should be able to change to your Bluetooth speaker."}]},{type:a,value:c},{type:b,tag:o,props:{id:Y},children:[{type:b,tag:h,props:{href:"#linux-firmware",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Occasionally the kernel and\u002For Linux firmware will have problems.  Sometimes, newer Linux firmware packages will have fixed bugs that aren't yet in the repositories.  They can be downloaded from here:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{href:ah,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:ah}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then they can be installed with this command:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:" dpkg -i linux-firmware_"},{type:b,tag:d,props:{className:[f,"comment"]},children:[{type:a,value:"#.###.#_all.deb"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:aa,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:B}]},{type:a,value:" You'll need to replace the nubmers\u002Ffile name with the most current version after downloading it."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:_},children:[{type:b,tag:h,props:{href:"#file-transfer",ariaHidden:i,tabIndex:j},children:[{type:b,tag:d,props:{className:[k,l]},children:[]}]},{type:a,value:$}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Sometimes, additional programs need to be installed for mobile equipment file transfer.  Please install the transfer tool with this command:"}]},{type:a,value:c},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,t]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:v}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:y}]},{type:a,value:u},{type:b,tag:d,props:{className:[f,g]},children:[{type:a,value:z}]},{type:a,value:" obexfs obexftp\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then connect (pair) to the device and see if send files works.  To receive files over Bluetooth you will need to enable the option in "},{type:b,tag:w,props:{},children:[{type:a,value:"Personal File Sharing"}]},{type:a,value:"."}]}]},dir:"\u002F",path:"\u002Fbluetooth",extension:".md",createdAt:ai,updatedAt:ai,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Ff3508c008ca86f50cf27ec87ae3e75e750ce7f40",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","span","p","token","function","a","true",-1,"icon","icon-link","code",2,"h2","div","nuxt-content-highlight","pre","language-bash","line-numbers"," ","sudo","u","h1","apt","install","strong","NOTE:","bluetooth","Bluetooth Troubleshooting","bluetooth-version","Bluetooth version","signal-interference","Signal Interference","device-specific-differences","Device Specific Differences","kernel-versions","Kernel Versions","os-versions","OS Versions","configuration-issues","Configuration Issues","audio-inputoutput","Audio Input\u002FOutput","useful-programs","Useful Programs","useful-commands","Useful Commands","controlling-audio","Controlling audio","linux-firmware","Linux Firmware","file-transfer","File Transfer","blockquote","nuxt-link","Bluetooth","Bluetooth Manager","operator","|","grep","http:\u002F\u002Fmirrors.kernel.org\u002Fubuntu\u002Fpool\u002Fmain\u002Fl\u002Flinux-firmware\u002F","2021-06-15T16:42:02.548Z")));