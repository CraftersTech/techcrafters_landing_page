const words = ["España", "Colombia", "Venezuela", "Europa", "Latinoamérica"];
const typeSpeed = 100;
const deleteSpeed = 50;
const pauseTime = 2000;

const typewriterElement = document.getElementById('typewriter');
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        typeDelay = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeDelay = 500;
    }

    setTimeout(type, typeDelay);
}

document.addEventListener('DOMContentLoaded', type);
