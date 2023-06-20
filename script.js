let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


document.addEventListener('DOMContentLoaded',init);
function init(){
	let query=window.matchMedia("(max-width:700px)");
	if(query.matches){
		sidebar.classList.add("close");
		let lists=document.querySelector(".sidebar");
		lists.addEventListener("click", ()=>{
			sidebar.classList.add("close");
		});
	}
}

let progress=document.querySelector("#progressbar");
let totalHeight=document.body.scrollHeight-window.innerHeight;
window.onScroll=function(){
	let progressHeight=(window.pageYOffset/totalHeight)*100;
	progress.style.height= progressHeight+"%";
}