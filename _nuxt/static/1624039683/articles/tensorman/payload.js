__NUXT_JSONP__("/articles/tensorman", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap){return {data:[{article:{slug:F,description:"Use Tensorman to manage TensorFlow containers.\n",layout:"article",title:"Install and Use Tensorman",keywords:["NVIDIA","CUDA",T,L],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fsystem76.png",hidden:false,redirect_from:["\u002Farticles\u002Finstall-tensorflow","\u002Farticles\u002Fuse-tensorflow","\u002Farticles\u002Fuse-tensorman"],section:"software",toc:[{id:U,depth:3,text:V},{id:A,depth:B,text:A},{id:W,depth:B,text:C},{id:X,depth:B,text:Y},{id:Z,depth:B,text:_},{id:$,depth:B,text:aa}],body:{type:"root",children:[{type:b,tag:u,props:{id:"installing-tensorman"},children:[{type:b,tag:m,props:{href:"#installing-tensorman",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Installing Tensorman"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:ab,props:{},children:[{type:a,value:L}]},{type:a,value:" is a tool for managing TensorFlow toolchains in Pop!_OS. It can be installed with this command:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:ad}]},{type:a,value:" tensorman\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"For NVIDIA CUDA support, the following package must be installed:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:ac}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:ad}]},{type:a,value:" nvidia-container-runtime\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The user account working with Tensorman must be added to the "},{type:b,tag:f,props:{},children:[{type:a,value:ae}]},{type:a,value:" group if that hasn't been done already:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:M}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:"usermod"}]},{type:a,value:" -aG docker "},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:"$USER"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If Docker was just installed, then a reboot will be needed before Tensorman can be used."}]},{type:a,value:c},{type:b,tag:u,props:{id:F},children:[{type:b,tag:m,props:{href:"#tensorman",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Packaging Tensorflow for Linux distributions is notoriously difficult, if not impossible. Every release of Tensorflow is accommodated by a myriad of possible build configurations, which requires building many variants of Tensorflow for each Tensorflow release. To make matters worse, each new version of Tensorflow will depend on a wide number of shared dependencies, which may not be supported on older versions of a Linux distribution, even if that distribution is actively supported by the distribution maintainers."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To solve this problem, the Tensorflow project provides official Docker container builds, which allow Tensorflow to operate in a contained environment that is isolated from the rest of the system. This virtual environment can operate independently of the base system, allowing you to use any version of Tensorflow on any version of a Linux distribution that supports the Docker runtime."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"However, configuring and managing Docker containers for Tensorflow using the "},{type:b,tag:f,props:{},children:[{type:a,value:ae}]},{type:a,value:" command line is currently tedious, and managing multiple versions for different projects is even more-so. To solve this problem for our users, we have developed "},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:" as a convenient tool to manage the installation and execution of Tensorflow Docker containers. It condenses the command-line soup into a set of simple commands that are easy to memorize."}]},{type:a,value:c},{type:b,tag:u,props:{id:"comparison-to-docker-command"},children:[{type:b,tag:m,props:{href:"#comparison-to-docker-command",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Comparison to Docker Command"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Take the following Docker invocation as an example:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker run -u "},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:af}]},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:":"}]},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:af}]},{type:a,value:" -v "},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:"$PWD"}]},{type:a,value:":\u002Fproject -w \u002Fproject "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:ag}]},{type:a,value:"\n    --runtime"},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:v}]},{type:a,value:"nvidia --init --rm tensorflow\u002Ftensorflow:latest-gpu "},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:ag}]},{type:a,value:"\n    python .\u002Fscript.py\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This designates for the latest version of Tensorflow with GPU support to be used, mounting the working directory to "},{type:b,tag:f,props:{},children:[{type:a,value:"\u002Fproject"}]},{type:a,value:", launching the container with the current user account, and and executing "},{type:b,tag:f,props:{},children:[{type:a,value:"script.py"}]},{type:a,value:" with the Python binary in the container. With "},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:", we can achieve the same with:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman run --gpu python -- .\u002Fscript.py\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Which defaults to the latest version, and whose version and tag variants can be set as defaults per-run, per-project, or user-wide."}]},{type:a,value:c},{type:b,tag:u,props:{id:"updating-and-installing-containers"},children:[{type:b,tag:m,props:{href:"#updating-and-installing-containers",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Updating and installing containers"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The following commands can be used for installing either the latest version of a container or a certain version:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman pull latest\ntensorman pull "},{type:b,tag:d,props:{className:[e,N]},children:[{type:a,value:O}]},{type:a,value:".0\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"running-commands-in-containers"},children:[{type:b,tag:m,props:{href:"#running-commands-in-containers",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Running commands in containers"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Commands are executed within the container using the "},{type:b,tag:f,props:{},children:[{type:a,value:"run"}]},{type:a,value:" command."}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:"# Default container version with Bash prompt"}]},{type:a,value:"\ntensorman run "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:ah},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:"# Default container version with Python script"}]},{type:a,value:"\ntensorman run python -- script.py\n\n"},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:"# Default container version with GPU support"}]},{type:a,value:"\ntensorman run --gpu "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:ah},{type:b,tag:d,props:{className:[e,I]},children:[{type:a,value:"# With GPU, Python3, and Juypyter support"}]},{type:a,value:"\ntensorman run --gpu --python3 --jupyter "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"h3",props:{id:U},children:[{type:b,tag:m,props:{href:"#python-api-example",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Given the following example, which will print a \"Hello World\" message, the TensorFlow version, and the output of a calculation made using the GPU:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,P]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"#!\u002Fusr\u002Fbin\u002Fpython3\nimport tensorflow as tf\nhello = tf.constant('Hello, TensorFlow!')\ntf.print(hello)\ntf.print('Using TensorFlow version: ' + tf.__version__)\nwith tf.device('\u002Fgpu:0'):\n    a = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[2, 3], name='a')\n    b = tf.constant([1.0, 2.0, 3.0, 4.0, 5.0, 6.0], shape=[3, 2], name='b')\n    c = tf.matmul(a, b)\ntf.print(c)\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If the Python file is named "},{type:b,tag:f,props:{},children:[{type:a,value:"hello-world.py"}]},{type:a,value:", it can be run with TensorFlow using this command:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,P]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman run --gpu python .\u002Fhello-world.py\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"setting-per-run"},children:[{type:b,tag:m,props:{href:"#setting-per-run",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Setting per-run"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If a certain version is specified with the "},{type:b,tag:f,props:{},children:[{type:a,value:"+"}]},{type:a,value:" argument, Tensorman will use that version instead."}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman +1.14.0 run --python3 --gpu "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Custom images may be specified with an "},{type:b,tag:f,props:{},children:[{type:a,value:v}]},{type:a,value:" argument."}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:ai},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:v}]},{type:a,value:"custom-image run --gpu "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"setting-per-project"},children:[{type:b,tag:m,props:{href:"#setting-per-project",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Setting per-project"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"There are two files that can be used for configuring Tensorman locally: "},{type:b,tag:f,props:{},children:[{type:a,value:A}]},{type:a,value:", and "},{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:". These files will be automatically detected if they can be found in a parent directory."}]},{type:a,value:c},{type:b,tag:E,props:{id:A},children:[{type:b,tag:m,props:{href:"#tensorflow-toolchain",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This file overrides the tensorflow image, defined in either "},{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:" or the user-wide configuration file."}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,N]},children:[{type:a,value:O}]},{type:a,value:".0 gpu python3\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Or specifying a custom image:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:v}]},{type:a,value:aj}]}]}]},{type:a,value:c},{type:b,tag:E,props:{id:W},children:[{type:b,tag:m,props:{href:"#tensormantoml",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"This file supports additional configuration parameters, with a user-wide configuration located at "},{type:b,tag:f,props:{},children:[{type:a,value:"~\u002F.config\u002Ftensorman\u002Fconfig.toml"}]},{type:a,value:", and a project-wide location at "},{type:b,tag:f,props:{},children:[{type:a,value:C}]},{type:a,value:". One of the reasons you may want to use this file is to declare some additional Docker flags, with the "},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:" key."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Using a default TensorFlow image:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,ak]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:al}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:"tag"}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'2.0.0'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:ao}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'python3'"}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:K}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Defining a custom image:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,ak]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:Q}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:J}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:al}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:R}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:am}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:"image"}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:"'custom-image'"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,y,z]},children:[{type:a,value:an}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:v}]},{type:a,value:h},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,w]},children:[{type:a,value:ao}]},{type:b,tag:d,props:{className:[e,r]},children:[{type:a,value:K}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"setting-per-user"},children:[{type:b,tag:m,props:{href:"#setting-per-user",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Setting per-user"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The default version user-wide can be changed using the "},{type:b,tag:f,props:{},children:[{type:a,value:"default"}]},{type:a,value:" subcommand. This version of "},{type:b,tag:ab,props:{},children:[{type:a,value:T}]},{type:a,value:" will be launched whenever the "},{type:b,tag:f,props:{},children:[{type:a,value:"tensorman run"}]},{type:a,value:" command is used:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman default "},{type:b,tag:d,props:{className:[e,N]},children:[{type:a,value:O}]},{type:a,value:".0\ntensorman default latest gpu python3\ntensorman default nightly\ntensorman default "},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:v}]},{type:a,value:aj}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:"small",props:{},children:[{type:a,value:"* By default, Tensorman will use the latest as the default per-user version tag."}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"listing-active-container-version"},children:[{type:b,tag:m,props:{href:"#listing-active-container-version",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Listing active container version"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"If the active containers from the current working directory need to be listed, the "},{type:b,tag:f,props:{},children:[{type:a,value:"show"}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman show\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"removing-containers"},children:[{type:b,tag:m,props:{href:"#removing-containers",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Removing containers"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Having many containers installed at the same time can use a lot of disk space. If some need to be removed, the "},{type:b,tag:f,props:{},children:[{type:a,value:"remove"}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,P]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman remove 1.14.0\ntensorman remove latest\ntensorman remove 481cb7ea88260404\ntensorman remove =custom-image\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"listing-installed-containers"},children:[{type:b,tag:m,props:{href:"#listing-installed-containers",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Listing installed containers"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To find installed containers, the "},{type:b,tag:f,props:{},children:[{type:a,value:"list"}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman list\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"creating-a-custom-image"},children:[{type:b,tag:m,props:{href:"#creating-a-custom-image",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Creating a custom image"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"In most projects, you will need to pull in more dependencies than the base TensorFlow image has. To do this, you will need to create the image by running a TensorFlow container as root, installing and setting up the environment how you need it, and then saving those changes as a new custom image."}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To do so, you will need to build the container in one terminal, and save it from another."}]},{type:a,value:c},{type:b,tag:E,props:{id:X},children:[{type:b,tag:m,props:{href:"#build-new-image",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"First, launch a terminal where you will begin configuring the Docker image:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman run --gpu --python3 --root --name CONTAINER_NAME "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Once you've made the changes needed, open another terminal and save it as a new image:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman save CONTAINER_NAME IMAGE_NAME\n"}]}]}]},{type:a,value:c},{type:b,tag:E,props:{id:Z},children:[{type:b,tag:m,props:{href:"#running-the-custom-image",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"You should then be able to specify that container with Tensorman, like so:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:ai},{type:b,tag:d,props:{className:[e,D]},children:[{type:a,value:v}]},{type:a,value:"IMAGE_NAME run --gpu "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:x}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"The "},{type:b,tag:f,props:{},children:[{type:a,value:"--python3"}]},{type:a,value:" and "},{type:b,tag:f,props:{},children:[{type:a,value:"--jupyter"}]},{type:a,value:" flags do nothing for custom containers, but "},{type:b,tag:f,props:{},children:[{type:a,value:"--gpu"}]},{type:a,value:" is required to enable runtime support for the GPU."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:E,props:{id:$},children:[{type:b,tag:m,props:{href:"#removing-the-custom-image",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:aa}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"Images saved through Tensorman are manageable through Tensorman. Listing and removing work the same way:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,s]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"tensorman remove IMAGE_NAME\n"}]}]}]},{type:a,value:c},{type:b,tag:u,props:{id:"pull-requests-welcome"},children:[{type:b,tag:m,props:{href:"#pull-requests-welcome",ariaHidden:n,tabIndex:o},children:[{type:b,tag:d,props:{className:[p,q]},children:[]}]},{type:a,value:"Pull requests welcome!"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"To see the source code and suggest features, visit the project on "},{type:b,tag:m,props:{href:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Ftensorman",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"GitHub"}]},{type:a,value:"."}]}]},dir:"\u002F",path:"\u002Ftensorman",extension:".md",createdAt:ap,updatedAt:ap,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fb546a49f39fb36d3650e6cb565117b195247563e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","span","token","code","p"," ","div","nuxt-content-highlight","pre","line-numbers","a","true",-1,"icon","icon-link","punctuation","language-bash","function","h1","=","string","bash","key","property","tensorflow-toolchain",2,"Tensorman.toml","operator","h2","tensorman","environment","constant","comment","[","]","Tensorman","sudo","number","1.14","language-text","docker_flags",","," command can be used:","TensorFlow","python-api-example","Python API example","tensormantoml","build-new-image","Build new image","running-the-custom-image","Running the custom image","removing-the-custom-image","Removing the custom image","u","apt","install","docker","$UID","\\","\n\n","tensorman ","custom-image gpu\n","language-toml","'-p'","'8080:8080'","variants","'gpu'","2021-06-18T18:07:14.469Z")));