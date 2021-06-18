__NUXT_JSONP__("/articles/graphics-switch-ubuntu", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{article:{slug:"graphics-switch-ubuntu",description:"How to use systems with switchable graphics\n",layout:"article",title:"Graphics switching (Ubuntu)",keywords:["System76","Ubuntu",18.04,19.1,20.04,C,D,E],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fubuntu.png",hidden:false,section:"software",toc:[{id:F,depth:x,text:G},{id:H,depth:x,text:I},{id:J,depth:x,text:K}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"The following laptops have switchable graphics:"}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Adder WS (addw1, addw2)"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Galago Pro (galp5 - NVIDIA models only)"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Gazelle (gaze14, gaze15)"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Oryx Pro (oryp4, oryp4-b, oryp5, oryp6, oryp7)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:y,props:{id:F},children:[{type:b,tag:g,props:{href:"#graphics-modes",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:v,props:{id:"integrated"},children:[{type:b,tag:g,props:{href:"#integrated",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Integrated graphics mode uses the integrated GPU only and turns off the NVIDIA\nGPU. This mode uses less power, leading to a longer battery life and less fan\nnoise."}]},{type:a,value:c},{type:b,tag:v,props:{id:"nvidia"},children:[{type:b,tag:g,props:{href:"#nvidia",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"NVIDIA graphics mode uses the discrete NVIDIA GPU only. This provides a better\ngraphical experience, but reduces battery life. Most external display ports on\nSystem76 laptops are connected to the NVIDIA GPU only. (Some models, such as the\nGazelle, may also have external ports connected to the integrated GPU.)"}]},{type:a,value:c},{type:b,tag:v,props:{id:"hybrid"},children:[{type:b,tag:g,props:{href:"#hybrid",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Hybrid graphics mode uses both the integrated GPU and the discrete NVIDIA GPU.\nApplications will use the integrated GPU unless explicitly requested to use the\ndiscrete GPU."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Vulkan applications must be launched with the following command to be rendered on the dGPU (NVIDIA):"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,z,A]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[f,N]},children:[{type:a,value:O}]},{type:a,value:w},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:P}]},{type:a,value:Q},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:R}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"GLX applications must be launched with the following command to be rendered on the dGPU (NVIDIA):"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,z,A]},children:[{type:a,value:M}]},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:B}]},{type:b,tag:d,props:{className:[f,N]},children:[{type:a,value:O}]},{type:a,value:w},{type:b,tag:d,props:{className:[f,z,A]},children:[{type:a,value:"__GLX_VENDOR_LIBRARY_NAME"}]},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:B}]},{type:a,value:"nvidia "},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:P}]},{type:a,value:Q},{type:b,tag:d,props:{className:[f,s]},children:[{type:a,value:R}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Hybrid graphics mode is available on 19.10 and later."}]},{type:a,value:c},{type:b,tag:v,props:{id:"compute"},children:[{type:b,tag:g,props:{href:"#compute",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Compute"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Compute graphics mode uses the integrated GPU for all rendering. The NVIDIA\nGPU is left available, allowing it to be used as a compute node."}]},{type:a,value:c},{type:b,tag:y,props:{id:H},children:[{type:b,tag:g,props:{href:"#switch-graphics",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Pop!_OS by System76 includes the system76-power package, which includes the\nability to switch between integrated, NVIDIA, and hybrid graphics modes."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"You'll only need to install this software manually if you did a fresh install of Ubuntu,\nas our installations will include these packages by default. You can do this\nwith the following commands:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" apt-add-repository ppa:system76-dev\u002Fstable\n"},{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:"apt"}]},{type:a,value:w},{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:"install"}]},{type:a,value:" gnome-shell-extension-system76-power system76-power\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Then we need to load the extension with this command:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"gnome-shell-extension-prefs\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Now enable the System76 Power extension with the toggle to the right."}]},{type:a,value:c},{type:b,tag:v,props:{id:"from-gnome-desktop"},children:[{type:b,tag:g,props:{href:"#from-gnome-desktop",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"From GNOME Desktop"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Click the system menu in the top right corner of your screen to access graphics\nswitching."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"Graphics",src:"\u002Fimages\u002Fgraphics-switch-ubuntu\u002Fsystem-menu.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Click on NVIDIA, Integrated, Hybrid, or Compute depending on your use case."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Once you select a mode, you will be prompted to reboot."}]},{type:a,value:c},{type:b,tag:v,props:{id:"from-the-command-line"},children:[{type:b,tag:g,props:{href:"#from-the-command-line",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"From the command line"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"If you are not using the GNOME Desktop Environment, you can use the system76-power\ncommand line tool. You can see the options with this command:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"system76-power "},{type:b,tag:d,props:{className:[f,"builtin","class-name"]},children:[{type:a,value:"help"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For seeing which graphics mode the system is using:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" system76-power graphics\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For switching to NVIDIA Graphics:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" system76-power graphics nvidia\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For switching to integrated Graphics:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" system76-power graphics integrated\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For switching to hybrid graphics:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" system76-power graphics hybrid\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"For switching to compute mode:"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:d,props:{className:[f,r]},children:[{type:a,value:t}]},{type:a,value:" system76-power graphics compute\n"}]}]}]},{type:a,value:c},{type:b,tag:y,props:{id:J},children:[{type:b,tag:g,props:{href:"#sources",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"The source code for the system76-power utility and the GNOME Shell extension can be found on GitHub:"}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fsystem76-power",rel:[S,T,U],target:V},children:[{type:a,value:"system76-power"}]}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fgnome-shell-extension-system76-power",rel:[S,T,U],target:V},children:[{type:a,value:"gnome-shell-extension-system76-power"}]}]},{type:a,value:c}]}]},dir:"\u002F",path:"\u002Fgraphics-switch-ubuntu",extension:".md",createdAt:W,updatedAt:W,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fb546a49f39fb36d3650e6cb565117b195247563e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","span","p","token","a","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","true",-1,"icon","icon-link","function","operator","sudo","li","h4"," ",3,"h3","assign-left","variable","=","NVIDIA","Hybrid","Integrated","graphics-modes","Graphics modes","switch-graphics","Switch graphics","sources","Sources","ul","__NV_PRIME_RENDER_OFFLOAD","number","1","\u003C","application","\u003E","nofollow","noopener","noreferrer","_blank","2021-06-18T18:07:14.465Z")));