(()=>{"use strict";function e(){let e=document.querySelector("#content"),t=document.createElement("div");t.className="homepage";let n=document.createElement("h1");n.textContent="Rock Munchers Cafe";let c=document.createElement("p");c.textContent="Rock Munchers is my restaurant of choice. They always have the finest selections of Earths most exquisite bits. My family has been going here every morning for generations and will be for many more!";let o=document.createElement("img");o.src="/images/rockpile.jpg",o.height="500",o.width="500",t.append(n,c,o),e.append(t)}!function(){let e=document.querySelector("#content"),t=document.createElement("div"),n=document.createElement("button"),c=document.createElement("button"),o=document.createElement("button");n.className="home btn",c.className="contact btn",o.className="menu btn",t.className="header buttons",n.textContent="Home",c.textContent="Contact",o.textContent="Menu",t.append(n,o,c),e.append(t)}(),e();let t=document.querySelector("#content"),n=document.querySelector(".home"),c=document.querySelector(".menu"),o=document.querySelector(".contact");n.addEventListener("click",(()=>{t.removeChild(t.lastChild),e()})),c.addEventListener("click",(()=>{t.removeChild(t.lastChild),function(){let e=document.querySelector("#content"),t=document.createElement("div");t.className="menu";let n=document.createElement("p");n.textContent="We have godlike rocks to eat.",t.append(n),e.append(t)}()})),o.addEventListener("click",(()=>{t.removeChild(t.lastChild),function(){let e=document.createElement("div");e.className="contact";let t=document.querySelector("#content"),n=document.createElement("p");n.textContent="You can reach us at 999-999-9999",e.append(n),t.appendChild(e)}()}))})();