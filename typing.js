// ===========================================
// TYPING TEXT
// ===========================================

const words = [

    "Graphic Designer",

    "UI/UX Designer",

    "Founder",

    "Creative Designer"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

const typingText = document.getElementById("typing-text");

function typing(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0, letterIndex++);

        if(letterIndex > currentWord.length){

            deleting = true;

            setTimeout(typing,1500);

            return;

        }

    }else{

        typingText.textContent = currentWord.substring(0, letterIndex--);

        if(letterIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typing,deleting ? 60 : 120);

}

typing();