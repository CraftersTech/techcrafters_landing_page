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

// Translation Dictionary
const translations = {
    es: {
        nav: {
            manifesto: "Manifiesto",
            benefits: "Beneficios",
            join: "Unirse"
        },
        hero: {
            description: "El ecosistema definitivo para builders, founders y creadores. Transformamos la ambición en proyectos tangibles y la diversidad en impacto global.",
            cta_primary: "Solicitar Acceso",
            cta_secondary: "Leer Manifiesto"
        },
        features: {
            subtitle: "Eliminamos la latencia entre tu ambición y tu impacto.",
            build_mode: "Aquí no hay espacio para diapositivas vacías ni promesas etéreas. Entras a un entorno de ejecución implacable donde tu única métrica de éxito es el progreso tangible. Accede a recursos exclusivos, mentoría técnica de alto nivel y sprints intensivos diseñados específicamente para transformar un simple 'quizás' en un producto viable que el mercado no pueda ignorar.",
            network_protocol: "El networking tradicional está roto; nosotros lo hemos reescrito. Curamos meticulosamente una red de alto calibre donde cada interacción suma valor exponencial. Conecta con ingenieros que han escalado sistemas complejos, fundadores que han levantado capital real y creativos que entienden tu visión. No buscas contactos en LinkedIn, buscas aliados estratégicos para construir el futuro.",
            global_deploy: "La tecnología es nuestra palanca para mover el mundo, y Málaga es solo el punto de partida. No nos conformamos con crear clones de aplicaciones existentes; buscamos resolver problemas estructurales. Te damos la plataforma y el alcance global para que tu código tenga consecuencias reales, escalables y positivas en la vida de las personas, sin importar dónde se encuentren."
        },
        join: {
            title: "Únete a la vanguardia.",
            subtitle: "Estamos aceptando nuevos miembros. Si eres un builder de corazón, este es tu lugar."
        },
        form: {
            name_placeholder: "> Nombre",
            email_placeholder: "> Email",
            role_placeholder: "> Tu Perfil",
            role_other: "Otro",
            portfolio_placeholder: "> LinkedIn / Portfolio / GitHub",
            motivation_placeholder: "> ¿Qué estás construyendo o quieres construir?"
        },
        manifesto: {
            title: "No construyas solo.",
            subtitle: "Más que un lema, nuestra forma de operar.",
            origin_title: "El Origen",
            origin_text_1: "Sentíamos que faltaba algo. Un lugar donde la intensidad no asuste, donde \"querer cambiar el mundo\" no suene a cliché.",
            origin_text_2: "TechCrafters nace de esa sed de <strong>hacer</strong>. No somos un grupo social. Somos una <strong>fuerza operativa</strong>. Un espacio seguro donde la curiosidad intelectual se encuentra con la ejecución implacable. Aquí incubamos talento, no egos.",
            origin_text_3: "Creemos que la verdadera innovación no pide permiso. En un mundo saturado de ruido, elegimos la claridad del código y la honestidad del diseño. Aquí no vienes a intercambiar tarjetas de visita, vienes a encontrar a los co-autores de tu próxima gran obra. Porque al final del día, lo único que importa es lo que construimos y con quién lo construimos.",
            who_title: "¿Para quiénes?",
            who_subtitle: "Para los inconformistas. Para los que tienen una historia que contar y una visión que construir. Buscamos a quienes usan su ambición como gasolina para generar impacto positivo a través de la tecnología.",
            builder_desc: "Obsesionado con la calidad del código y la arquitectura elegante. Vives en el editor, debuggeas con pasión y buscas la excelencia técnica por encima de todo. Aquí encontrarás otros ingenieros que entienden que cada línea de código es una oportunidad para crear algo extraordinario. No buscas solo escribir software, buscas construir sistemas que importen.",
            founder_desc: "Ves oportunidades donde otros ven caos. Tienes la visión para imaginar el futuro y la valentía para construirlo desde cero. Lideras con el ejemplo, tomas decisiones difíciles y sabes que el camino del emprendimiento es solitario hasta que encuentras tu tribu. Aquí conectarás con otros founders que entienden el peso de la responsabilidad y la emoción de ver tu idea cobrar vida.",
            gamechanger_desc: "Tu perspectiva única y tu historia personal son tu superpoder. Usas tu contexto cultural, tus experiencias y tu visión del mundo para crear soluciones que nadie más podría imaginar. No te conformas con copiar lo que ya existe; quieres revolucionar industrias enteras. TechCrafters es donde tu diversidad se convierte en tu ventaja competitiva y tu voz encuentra el eco que merece.",
            cta_text: "Tu silla en la mesa está reservada. Solo falta que la tomes.",
            cta_button: "Unirse a la comunidad"
        }
    },
    en: {
        nav: {
            manifesto: "Manifesto",
            benefits: "Benefits",
            join: "Join"
        },
        hero: {
            description: "The ultimate ecosystem for builders, founders, and creators. We transform ambition into tangible projects and diversity into global impact.",
            cta_primary: "Request Access",
            cta_secondary: "Read Manifesto"
        },
        features: {
            subtitle: "We eliminate the latency between your ambition and your impact.",
            build_mode: "No room for empty slides or ethereal promises here. You enter an environment of relentless execution where your only metric of success is tangible progress. Access exclusive resources, high-level technical mentorship, and intensive sprints designed specifically to transform a simple 'maybe' into a viable product that the market cannot ignore.",
            network_protocol: "Traditional networking is broken; we've rewritten it. We meticulously curate a high-caliber network where every interaction adds exponential value. Connect with engineers who have scaled complex systems, founders who have raised real capital, and creatives who understand your vision. You're not looking for contacts on LinkedIn; you're looking for strategic allies to build the future.",
            global_deploy: "Technology is our lever to move the world, and Málaga is just the starting point. We don't settle for creating clones of existing apps; we seek to solve structural problems. We give you the platform and global reach so your code has real, scalable, and positive consequences in people's lives, no matter where they are."
        },
        join: {
            title: "Join the vanguard.",
            subtitle: "We are accepting new members. If you are a builder at heart, this is your place."
        },
        form: {
            name_placeholder: "> Name",
            email_placeholder: "> Email",
            role_placeholder: "> Your Profile",
            role_other: "Other",
            portfolio_placeholder: "> LinkedIn / Portfolio / GitHub",
            motivation_placeholder: "> What are you building or want to build?"
        },
        manifesto: {
            title: "Don't build alone.",
            subtitle: "More than a motto, our way of operating.",
            origin_title: "The Origin",
            origin_text_1: "We felt something was missing. A place where intensity doesn't scare, where \"wanting to change the world\" doesn't sound like a cliché.",
            origin_text_2: "TechCrafters is born from that thirst to <strong>do</strong>. We are not a social group. We are an <strong>operative force</strong>. A safe space where intellectual curiosity meets relentless execution. Here we incubate talent, not egos.",
            origin_text_3: "We believe true innovation asks for no permission. In a world saturated with noise, we choose the clarity of code and the honesty of design. Here you don't come to exchange business cards; you come to find the co-authors of your next masterpiece. Because at the end of the day, the only thing that matters is what we build and who we build it with.",
            who_title: "For whom?",
            who_subtitle: "For the nonconformists. For those who have a story to tell and a vision to build. We look for those who use their ambition as fuel to generate positive impact through technology.",
            builder_desc: "Obsessed with code quality and elegant architecture. You live in the editor, debug with passion, and seek technical excellence above all else. Here you will find other engineers who understand that every line of code is an opportunity to create something extraordinary. You don't just seek to write software; you seek to build systems that matter.",
            founder_desc: "You see opportunities where others see chaos. You have the vision to imagine the future and the courage to build it from scratch. You lead by example, make tough decisions, and know that the path of entrepreneurship is lonely until you find your tribe. Here you will connect with other founders who understand the weight of responsibility and the thrill of seeing your idea come to life.",
            gamechanger_desc: "Your unique perspective and personal story are your superpower. You use your cultural context, your experiences, and your worldview to create solutions no one else could imagine. You don't settle for copying what already exists; you want to revolutionize entire industries. TechCrafters is where your diversity becomes your competitive advantage and your voice finds the echo it deserves.",
            cta_text: "Your seat at the table is reserved. You just have to take it.",
            cta_button: "Join the community"
        }
    }
};

// Language Handling
let currentLang = localStorage.getItem('techcrafters_lang') || 'es';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('techcrafters_lang', lang);
    document.documentElement.lang = lang;

    // Update Toggle Button Text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Update Text Content
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            if (value) value = value[k];
        }

        if (value) {
            element.innerHTML = value; // Use innerHTML to support <strong> tags
        }
    });

    // Update Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[lang];

        for (const k of keys) {
            if (value) value = value[k];
        }

        if (value) {
            element.placeholder = value;
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    type();
    initCanvas();

    // Initialize Language
    updateLanguage(currentLang);

    // Language Toggle Listener
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(newLang);
        });
    }

    // Hamburger Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

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

            btn.innerText = currentLang === 'es' ? "Enviando..." : "Sending...";
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
                    btn.innerText = currentLang === 'es' ? "¡Solicitud Enviada!" : "Request Sent!";
                    btn.style.backgroundColor = "#22c55e"; // Green
                    btn.style.borderColor = "#22c55e";
                    joinForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                btn.innerText = currentLang === 'es' ? "Error. Inténtalo de nuevo." : "Error. Try again.";
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
