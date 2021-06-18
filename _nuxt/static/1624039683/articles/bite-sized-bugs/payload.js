__NUXT_JSONP__("/articles/bite-sized-bugs", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E){return {data:[{article:{slug:"bite-sized-bugs",description:"Get started contributing quickly with bitesize bugs!\n",layout:"article",title:u,keywords:["Support","Contribution","System76"],image:"http:\u002F\u002Fsupport.system76.com\u002Fimages\u002Fpop-icon.png",hidden:false,section:"software-troubleshooting",toc:[{id:x,depth:3,text:y}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"bitesize-bugs"},children:[{type:b,tag:g,props:{href:"#bitesize-bugs",ariaHidden:z,tabIndex:A},children:[{type:b,tag:f,props:{className:[B,C]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Some bugs are determined by the maintainer of Pop! projects to be easy to fix, these bugs are referred to as \"bitesize\" bugs and will show up in the project's issue tracker as such."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:u,src:"\u002Fimages\u002Fbite-sized-bugs\u002Fbsb-github-screenshot.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The bitesize bug badge exists on the right side of the project's issue tracker. New contributors should look for these for an easy bug that they can tackle in an hour or two. Experienced contributors can grab these if they want something they can knock out quickly when they are short on time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Solving these bugs often contributes to better polish for the overall project. Alone, these bugs may seem small, but when you add them up they vastly improve the quality of the platform. They also offer an opportunity to get involved in the project without dedicating a lot of time."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:D,rel:[j,k,l],target:m},children:[{type:a,value:"Bitesize bugs for Pop!_OS (distro)"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:"h3",props:{id:x},children:[{type:b,tag:g,props:{href:"#bitesize-bug-example",ariaHidden:z,tabIndex:A},children:[{type:b,tag:f,props:{className:[B,C]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Let's go through how to contribute via a bitesize bug fix. First take a look at what is listed as a "},{type:b,tag:g,props:{href:D,rel:[j,k,l],target:m},children:[{type:a,value:"bitesize bug via the issue tracker"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"For this example I've identified an issue with the terminal colors."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Terminal Color Issue",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fterminal-color-issue.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It looks as though one of the colors for text in the palette is the same as the background, so it doesn't show up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Problem Identified",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fthe-problem.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"But our hero jrock2004 has identified a potential solution:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Potential Solution",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fthe-solution.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"That makes this a great bite-sized bug! So the first thing we have to do is sort through where this bug is. jrock2004 identifies that this is a default setting, and looks in the pop-default-settings repo, it's there that he finds the problem in "},{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fpop-default-settings\u002Fblob\u002Fmaster\u002Fdebian\u002Fpop-default-settings.gsettings-override",rel:[j,k,l],target:m},children:[{type:a,value:"this file"}]},{type:a,value:", where it lists out the org.gnome.Terminal.Legacy.Profile."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If we are going to fix this problem, we have to pull down the source code. So let's do that. This can be done by clicking the \"Fork\" button in the top-right corner of the project page on GitHub (pictured below)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Fork Button",src:"\u002Fimages\u002Fbite-sized-bugs\u002Ffork-me.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have forked the project, you should have a copy in your own GitHub account (if you don't already have an account, you'll have to create one)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Your Very Own Fork",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fmy-very-own-fork.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"See the name there? Since this is my account (Ryan), you see the repo is beside my name, and under it says \"forked from system76\u002Fpop-default-settings\". Now we can clone the repository down to our own computer and make the necessary changes. First, you should install git."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:"sudo"}]},{type:a,value:w},{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:"apt"}]},{type:a,value:w},{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:"install"}]},{type:a,value:w},{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:t}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you've done that take a look at the \"Clone or Download\" button, give it a click and copy the link it displays. If you don't have an SSH key associated with your GitHub account "},{type:b,tag:g,props:{href:"https:\u002F\u002Fhelp.github.com\u002Farticles\u002Fconnecting-to-github-with-ssh\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"here's how"}]},{type:a,value:". If you don't want to do that right now, you can pull down the code with HTTPS, you'll have to enter your username and password - to do that click the \"Use HTTPS in the corner of the Clone box\" (pictured below)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Clone your repo",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fclone-me.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have copied the link in the clone box, run the following command(shown with https)."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:t}]},{type:a,value:" clone https:\u002F\u002Fgithub.com\u002Fryanleesipes\u002Fpop-default-settings.git\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enter any information requested (with HTTPS it should just be your GitHub username and password). Following that it should download the files for the project and put them in a folder in the directory you are currently sitting in within your terminal."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Cloning the repo",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fgit-clone.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next I open the file we identified above in my text editor of choice, "},{type:b,tag:g,props:{href:"https:\u002F\u002Fatom.io\u002F",rel:[j,k,l],target:m},children:[{type:a,value:"Atom"}]},{type:a,value:". You can use the text editor you prefer. I find the line with the palette settings."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Palette Settings",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fpalette-line.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'll change the proper setting in here (took some RGB brushing up to figure out which one was the right one)."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Before:\n"},{type:b,tag:e,props:{alt:"Before Palette Setting",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fbefore.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"After:\n"},{type:b,tag:e,props:{alt:"After Palette Setting",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fafter.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now that the change is made, the file needs to be saved. Once it is saved we can make a commit, commits store that change in Git allowing us to share that change with the world. Make sure you are in the project directory (in this example that would be "},{type:b,tag:n,props:{},children:[{type:a,value:"pop-default-settings"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'll run the following command:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:t}]},{type:a,value:" commit -am "},{type:b,tag:f,props:{className:[h,"string"]},children:[{type:a,value:"\"Updated the default palette settings in terminal, changed a color for better visibility.\""}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you'd like to know why the commit command has the arguments, the Git\u002FGitHub documentation can explain that better than most. You can go through a "},{type:b,tag:g,props:{href:"https:\u002F\u002Ftry.github.io\u002Flevels\u002F1\u002Fchallenges\u002F1",rel:[j,k,l],target:m},children:[{type:a,value:"Git tutorial here"}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The output should look like this:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Commit Made",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fcommit-sent.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now you can run the following command to push your changes from your local machine to your forked repository on GitHub:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:f,props:{className:[h,i]},children:[{type:a,value:t}]},{type:a,value:" push\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If it's your first time pushing to a remote repository, you might be asked to setup who you are. That's fine, follow the instructions in your terminal."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once it has completed the push, you'll see something resembling the following:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Push Successful",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fpush-successful.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Going to your repo, above the code, you should see something along the lines of \"This branch is 1 commit ahead of system76:master\":"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{alt:"Ahead of Master",src:"\u002Fimages\u002Fbite-sized-bugs\u002Fbranch-ahead.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Click on \"Pull Request\" when you are ready to submit your code for review by the Pop!_OS maintainers. You'll see a webpage detailing the work that you've done. Review it and if everything looks good click on the \"Create Pull Request\" button, and you've successfully contributed!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maintainers sometimes provide feedback, upon which you will receive a notification in your GitHub account. If you incorporate their changes and push again that should be reflected in your pull request. If you have any trouble, ask the maintainer reviewing your pull request for help!"}]}]},dir:"\u002F",path:"\u002Fbite-sized-bugs",extension:".md",createdAt:E,updatedAt:E,authors:[{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fb546a49f39fb36d3650e6cb565117b195247563e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{}}],fetch:{},mutations:void 0}}("text","element","\n","p","img","span","a","token","function","nofollow","noopener","noreferrer","_blank","code","div","nuxt-content-highlight","pre","language-bash","line-numbers","git","Bitesize Bugs","."," ","bitesize-bug-example","Bitesize Bug Example","true",-1,"icon","icon-link","https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fpop\u002Flabels\u002Fbite-sized","2021-06-18T18:07:14.465Z")));