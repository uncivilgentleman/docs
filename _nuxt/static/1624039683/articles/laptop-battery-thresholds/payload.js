__NUXT_JSONP__("/articles/laptop-battery-thresholds", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{article:{slug:"laptop-battery-thresholds",description:"Set battery charging thresholds on your System76 laptop.\n",layout:"article",title:q,keywords:["Battery","Battery Life"],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fsystem76.png",hidden:false,section:"hardware",toc:[{id:r,depth:s,text:t},{id:u,depth:v,text:w},{id:x,depth:v,text:y},{id:z,depth:s,text:A}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"battery-thresholds"},children:[{type:b,tag:f,props:{href:"#battery-thresholds",ariaHidden:h,tabIndex:i},children:[{type:b,tag:g,props:{className:[j,k]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Charging thresholds allow your System76 laptop to avoid charging the battery until it has dropped below a lower bound (the start threshold), and to stop charging when it reaches an upper bound (the end threshold). This is useful when your laptop is plugged into an AC power adapter for extended periods of time, as it prevents unnecessary micro-charging that would reduce battery longevity."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To determine if your laptop has Open Firmware or proprietary firmware, see "},{type:b,tag:"nuxt-link",props:{to:"\u002Farticles\u002Fopen-firmware-systems"},children:[{type:a,value:"this article"}]},{type:a,value:". (If a system has Open Firmware, then it must also have Open EC to work with charging thresholds.) See "},{type:b,tag:f,props:{href:B},children:[{type:a,value:"Charging Thresholds"}]},{type:a,value:" for Open Firmware systems or "},{type:b,tag:f,props:{href:C},children:[{type:a,value:"FlexiCharger"}]},{type:a,value:" for proprietary firmware systems."}]},{type:a,value:c},{type:b,tag:D,props:{id:r},children:[{type:b,tag:f,props:{href:B,ariaHidden:h,tabIndex:i},children:[{type:b,tag:g,props:{className:[j,k]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"Note:"}]},{type:a,value:" This feature is not currently finished. Currently, the thresholds are reset when the EC is reset (which happens when the system is shut down and the power is unplugged.) Once the feature is complete, the thresholds will be persistent and a GUI will be available to set them."}]},{type:a,value:c},{type:b,tag:E,props:{id:u},children:[{type:b,tag:f,props:{href:"#using-the-terminal",ariaHidden:h,tabIndex:i},children:[{type:b,tag:g,props:{className:[j,k]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can see the thresholds that are currently set using this command:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"system76-power charge-thresholds\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can list the available charging profiles using this command:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"system76-power charge-thresholds --list-profiles\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Then, you can select a profile using one of these commands:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"system76-power charge-thresholds --profile full_charge\nsystem76-power charge-thresholds --profile balanced\nsystem76-power charge-thresholds --profile max_lifespan\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also set custom thresholds without using a profile. For example, this command will set the start threshold to "},{type:b,tag:e,props:{},children:[{type:a,value:F}]},{type:a,value:" and the end threshold to "},{type:b,tag:e,props:{},children:[{type:a,value:G}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"system76-power charge-thresholds "},{type:b,tag:g,props:{className:[H,I]},children:[{type:a,value:F}]},{type:a,value:" "},{type:b,tag:g,props:{className:[H,I]},children:[{type:a,value:G}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:E,props:{id:x},children:[{type:b,tag:f,props:{href:"#via-sysfs",ariaHidden:h,tabIndex:i},children:[{type:b,tag:g,props:{className:[j,k]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Charging thresholds are exposed by the firmware through ACPI, and the "},{type:b,tag:e,props:{},children:[{type:a,value:"system76_acpi"}]},{type:a,value:" kernel module makes them available through standard sysfs entries:"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:J,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fsys\u002Fclass\u002Fpower_supply\u002FBAT0\u002Fcharge_control_start_threshold"}]}]},{type:a,value:c},{type:b,tag:J,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fsys\u002Fclass\u002Fpower_supply\u002FBAT0\u002Fcharge_control_end_threshold"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The thresholds can be controlled by reading from and writing to these sysfs files."}]},{type:a,value:c},{type:b,tag:D,props:{id:z},children:[{type:b,tag:f,props:{href:C,ariaHidden:h,tabIndex:i},children:[{type:b,tag:g,props:{className:[j,k]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"FlexiCharger is an implementation of charging thresholds in proprietary firmware, made available as a UEFI setting."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To adjust the thresholds, reboot the computer and enter the UEFI setup utility by holding down "},{type:b,tag:"kbd",props:{},children:[{type:a,value:"F2"}]},{type:a,value:" and selecting "},{type:b,tag:e,props:{},children:[{type:a,value:"Setup Utility"}]},{type:a,value:". Navigate to Advanced, then Advanced Chipset Control, and set FlexiCharger to Enabled. Two new options will appear where you can set the start and stop thresholds."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"Enabling FlexiCharger",src:"\u002Fimages\u002Flaptop-charging-thresholds\u002Fflexicharger.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once configured, save and exit the setup utility. The thresholds can be disabled at any time by setting FlexiCharger back to Disabled."}]}]},dir:"\u002F",path:"\u002Flaptop-battery-thresholds",extension:".md",createdAt:K,updatedAt:K,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fb546a49f39fb36d3650e6cb565117b195247563e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","p","code","a","span","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-bash","line-numbers","Battery Thresholds","configuring-charging-thresholds-open-firmware",2,"Configuring Charging Thresholds (Open Firmware)","using-the-terminal",3,"Using the terminal:","via-sysfs","Via sysfs:","configuring-flexicharger-proprietary-firmware","Configuring FlexiCharger (proprietary firmware)","#configuring-charging-thresholds-open-firmware","#configuring-flexicharger-proprietary-firmware","h2","h3","40","80","token","number","li","2021-06-18T18:07:14.465Z")));