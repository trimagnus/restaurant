(()=>{"use strict";function e(){const e=document.createElement("div");return e.innerHTML="<p>I'm in the home page section</p>",e}const n=document.getElementById("content"),t=document.createElement("main");n.appendChild(function(){const e=document.createElement("header");return e.innerHTML='\n  <h1>The Restaurant</h1>\n  <nav>\n    <div id="homeButton"><a class="navLink selectedNav" href="#">Home</a></div>\n    <div id="menuButton"><a class="navLink" href="#">Menu</a></div>\n    <div id="contactButton"><a class="navLink" href="#">Contact</a></div>\n  </nav>\n  ',e}()),n.appendChild(t),t.appendChild(e()),n.appendChild(function(){const e=document.createElement("footer");return e.innerHTML="<p>&copy 2021 Joshua Cahoon</p>",e.innerHTML+='<a href="https://github.com/trimagnus"><img width="20px" height="20px" class="ghIcon" src="../node_modules/super-tiny-icons/images/svg/github.svg"></img></a>',e}());const i=e=>{(()=>{for(;t.firstChild;)t.removeChild(t.firstChild)})(),(e=>{for(const e of document.getElementsByClassName("navLink"))e.classList.remove("selectedNav");e.classList.add("selectedNav")})(e)};document.querySelector("#homeButton").addEventListener("click",(n=>{i(n.target),t.appendChild(e())})),document.querySelector("#menuButton").addEventListener("click",(e=>{i(e.target),t.appendChild(function(){const e=document.createElement("div");return e.innerHTML="<p>This is the menu page</p>",e}())})),document.querySelector("#contactButton").addEventListener("click",(e=>{i(e.target),t.appendChild(function(){const e=document.createElement("div");return e.innerHTML="<p>This is the contact page</p>",e}())}))})();