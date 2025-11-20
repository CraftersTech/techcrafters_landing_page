const words = ["España", "Colombia", "Venezuela", "Europa", "Latinoamérica"];
const typeSpeed = 200;
const deleteSpeed = 200;
const pauseTime = 2500;

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

    setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
    initCanvas();

    // Trigger Action Scramble after delay
    setTimeout(() => {
        const actionText = document.getElementById("action-text");
        if (actionText) {
            scrambleText(actionText);
        }
    }, 600); // Sync with CSS animation delay

    // Form Submission
    const joinForm = document.getElementById('join-form');
    if (joinForm) {
        joinForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const btn = joinForm.querySelector('button');
            const originalText = btn.innerText;
            const formData = new FormData(joinForm);

            btn.innerText = "Enviando...";
            btn.disabled = true;

            try {
                const response = await fetch(joinForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.innerText = "¡Solicitud Enviada!";
                    btn.style.backgroundColor = "#22c55e"; // Green
                    btn.style.borderColor = "#22c55e";
                    joinForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                btn.innerText = "Error. Inténtalo de nuevo.";
                btn.style.backgroundColor = "#ef4444"; // Red
                btn.style.borderColor = "#ef4444";
                console.error('Form error:', error);
            }

            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = "";
                btn.style.borderColor = "";
            }, 3000);
        });
    }
});

function scrambleText(element) {
    const finalText = element.getAttribute("data-value");
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let iterations = 0;

    const interval = setInterval(() => {
        element.innerText = finalText
            .split("")
            .map((letter, index) => {
                if (index < iterations) {
                    return finalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (iterations >= finalText.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3; // Speed of resolution
    }, 30);
}


// Tech Grid Animation
function initCanvas() {
    const canvas = document.getElementById('tech-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let mouse = { x: -1000, y: -1000 };
    let columns = [];
    const fontSize = 14;
    const spacing = 20;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initGrid();
    }

    function initGrid() {
        columns = [];
        for (let x = 0; x < width; x += spacing) {
            let column = [];
            for (let y = 0; y < height; y += spacing) {
                column.push({
                    x: x,
                    y: y,
                    value: Math.random() > 0.5 ? '1' : '0',
                    glitch: 0
                });
            }
            columns.push(column);
        }
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    resize();

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Font settings
        ctx.font = `${fontSize}px 'Space Grotesk', monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const hoverRadius = 100;

        columns.forEach(column => {
            column.forEach(point => {
                const dx = point.x - mouse.x;
                const dy = point.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Default style
                let color = 'rgba(82, 82, 91, 0.15)'; // Dark gray
                let char = point.value;

                // Interaction
                if (distance < hoverRadius) {
                    // Glitch effect
                    if (Math.random() > 0.8) {
                        point.value = point.value === '1' ? '0' : '1';
                    }

                    const intensity = 1 - (distance / hoverRadius);
                    color = `rgba(34, 197, 94, ${0.2 + intensity * 0.8})`; // Terminal Green glow

                    // Occasionally show random char
                    if (Math.random() > 0.9) char = Math.random() > 0.5 ? '1' : '0';
                }

                ctx.fillStyle = color;
                ctx.fillText(char, point.x, point.y);
            });
        });

        requestAnimationFrame(draw);
    }


    draw();
}

// Scroll Animation Observer for Manifesto Page
document.addEventListener('DOMContentLoaded', () => {
    const fadeInSections = document.querySelectorAll('.fade-in-section');

    if (fadeInSections.length > 0) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        fadeInSections.forEach(section => {
            observer.observe(section);
        });
    }
});
