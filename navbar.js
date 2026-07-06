// ===========================================
// NAVBAR
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});

// ===========================================
// MOBILE MENU
// ===========================================

const menuToggle = document.querySelector(".menu-toggle");

const menu = document.querySelector("nav ul");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        menu.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}