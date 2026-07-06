const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

});

document.addEventListener("mousedown",()=>{

    cursor.classList.add("click");

});

document.addEventListener("mouseup",()=>{

    cursor.classList.remove("click");

});

document.querySelectorAll("a, button, [data-detail], .detail-close").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("hover");
        blur.classList.add("hover");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("hover");
        blur.classList.remove("hover");

    });

});

document.addEventListener("mouseleave",()=>{

    cursor.classList.add("hide");
    blur.classList.add("hide");

});

document.addEventListener("mouseenter",()=>{

    cursor.classList.remove("hide");
    blur.classList.remove("hide");

});