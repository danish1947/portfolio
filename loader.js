// ===========================================
// LOADER
// Danish Muhammad Zein Portfolio
// ===========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.style.overflow = "auto";

    }, 2800);

});