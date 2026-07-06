// ===========================================
// SCROLL REVEAL
// ===========================================

const reveals = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", reveal);

function reveal(){

    const trigger = window.innerHeight - 120;

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        if(top < trigger){

            item.classList.add("show");

        }

    });

}

// ===========================================
// SMOOTH BUTTON
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===========================================
// CONTACT FORM (mailto)
// ===========================================

const contactForm = document.getElementById("contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const subject = encodeURIComponent("Portfolio Inquiry from " + name);
        const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");

        window.location.href = "mailto:zeindanish08@gmail.com?subject=" + subject + "&body=" + body;

    });

}
