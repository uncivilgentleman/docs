__NUXT_JSONP__("/articles/open-firmware-smmstore", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{article:{slug:"open-firmware-smmstore",description:"How to fix the failed with exit status: exit code: 5 message\n",layout:"article",title:"Firmware Flash to Clear the SMMSTORE ROM (Error code 5)",keywords:["Firmware","Open Firmware","UEFI","SMMSTORE"],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fsystem76.png",hidden:false,section:"software-troubleshooting",toc:[{id:u,depth:v,text:w},{id:x,depth:v,text:y}],body:{type:"root",children:[{type:a,tag:z,props:{id:u},children:[{type:a,tag:e,props:{href:"#things-that-you-will-need",ariaHidden:A,tabIndex:B},children:[{type:a,tag:C,props:{className:[D,E]},children:[]}]},{type:b,value:w}]},{type:b,value:f},{type:a,tag:"ul",props:{},children:[{type:b,value:f},{type:a,tag:s,props:{},children:[{type:b,value:"1-2 flash drives (1GB and up)"}]},{type:b,value:f},{type:a,tag:s,props:{},children:[{type:b,value:"Philips Screwdriver"}]},{type:b,value:f},{type:a,tag:s,props:{},children:[{type:b,value:"Approx. 30 mins."}]},{type:b,value:f}]},{type:b,value:f},{type:a,tag:z,props:{id:x},children:[{type:a,tag:e,props:{href:"#the-error-messages",ariaHidden:A,tabIndex:B},children:[{type:a,tag:C,props:{className:[D,E]},children:[]}]},{type:b,value:y}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"If you are seeing any of these messages on your Open Firmware system:"}]},{type:b,value:f},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,q]},children:[{type:a,tag:r,props:{},children:[{type:b,value:"configuring bootloader error: command failed with exit status: exit code: 5\n"}]}]}]},{type:b,value:f},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,q]},children:[{type:a,tag:r,props:{},children:[{type:b,value:"errored while installing system: command failed with exit status: exit code: 5\n"}]}]}]},{type:b,value:f},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,q]},children:[{type:a,tag:r,props:{},children:[{type:b,value:"calling Schedule method failed: \"failed to add boot entry: exit code: 5\n"}]}]}]},{type:b,value:f},{type:a,tag:m,props:{className:[n]},children:[{type:a,tag:o,props:{className:[p,q]},children:[{type:a,tag:r,props:{},children:[{type:b,value:"system76-firmware: failed to schedule: failed to add boot entry: exit code: 5\n"}]}]}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"we may need to clear the SMMSTORE ROM by flashing new firmware using a flash drive with a custom firmware update tool. Here are the steps to perform that action. After flashing, this will remove any custom EFI variables (such as those installed by boot managers). We have information on repairing the bootloader at the end of this article."}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"Please download the zip file for your sytem and unzip the files within to a FAT32 formatted USB drive. Then shutdown the laptop and remove all NVMe M.2 drive(s) in the system using the step by step instructions for your system:"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:k,props:{},children:[{type:a,tag:t,props:{align:c},children:[{type:b,value:"System"}]},{type:a,tag:t,props:{align:c},children:[{type:b,value:"Patched Firmware"}]},{type:a,tag:t,props:{align:c},children:[{type:b,value:"Tech Docs"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Adder WS  (addw2)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Faddw2-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"addw2-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Faddw2\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"addw2"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Bonobo WS  (bonw14)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Fbonw14-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"bonw14-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Fbonw14\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"bonw14"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Darter Pro (darp6)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Fdarp6-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"darp6-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Fdarp6\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"darp6"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Darter Pro (darp7)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Fdarp7-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"darp7-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Fdarp7\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"darp7"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Galago Pro (galp5)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Fgalp5-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"galp5-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Fgalp5\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"galp5"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Lemur Pro (lemp9)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Flemp9-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"lemp9-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Flemp9\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"lemp9"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Lemur Pro (lemp10)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Flemp10-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"lemp10-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Flemp10\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"lemp10"}]}]}]},{type:a,tag:k,props:{},children:[{type:a,tag:d,props:{align:c},children:[{type:b,value:"Oryx Pro (oryp6)"}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"\u002Ffiles\u002Fclear-smmstore\u002Foryp6-76ec.zip",rel:[g,h,i],target:j},children:[{type:b,value:"oryp6-76ec.zip"}]}]},{type:a,tag:d,props:{align:c},children:[{type:a,tag:e,props:{href:"https:\u002F\u002Ftech-docs.system76.com\u002Fmodels\u002Foryp6\u002Frepairs.html#replacing-an-m2nvme-ssd",rel:[g,h,i],target:j},children:[{type:b,value:"oryp6"}]}]}]}]}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"With all drive(s) removed, replace the cover and boot with the USB stick inserted. After the firmware has been flashed, remove the USB stick and reinstall the drive(s)."}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"Once the system is put back together we may need to boot with a live image in order to repair the boot loader if you dual-boot with Windows 10. We provide step by step instructions on how to do this in our support articles in the links below:"}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:a,tag:F,props:{to:"\u002Farticles\u002Flive-disk"},children:[{type:b,value:"https:\u002F\u002Fsupport.system76.com\u002Farticles\u002Flive-disk\u002F"}]}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:a,tag:F,props:{to:"\u002Farticles\u002Fbootloader"},children:[{type:b,value:"https:\u002F\u002Fsupport.system76.com\u002Farticles\u002Fbootloader\u002F"}]}]},{type:b,value:f},{type:a,tag:l,props:{},children:[{type:b,value:"If at any point you run into any errors during this process please paste \u002F attach photos of the errors in a support ticket."}]}]},dir:"\u002F",path:"\u002Fopen-firmware-smmstore",extension:".md",createdAt:G,updatedAt:G,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Ff3508c008ca86f50cf27ec87ae3e75e750ce7f40",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("element","text","center","td","a","\n","nofollow","noopener","noreferrer","_blank","tr","p","div","nuxt-content-highlight","pre","language-text","line-numbers","code","li","th","things-that-you-will-need",2,"Things that you will need","the-error-messages","The error messages","h2","true",-1,"span","icon","icon-link","nuxt-link","2021-06-15T16:42:02.552Z")));