const toggle=document.querySelector(".hamburger_menu");
const menu=document.querySelector(".menu");
 toggle.addEventListener("click",function(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }
    else{
        menu.classList.add("active");
    }
})