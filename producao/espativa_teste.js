/* ========================================= SLIDE DE IMAGENS ========================================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextButton = document.getElementById("nextSlide");
const prevButton = document.getElementById("prevSlide");

let currentSlide = 0;

/* Mostrar slide */
function showSlide(index) {
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

/* Próximo slide */
function nextSlide() {
    let next = currentSlide + 1;

    if (next >= slides.length) {
        next = 0;
    }

    showSlide(next);
}

/* Slide anterior */
function previousSlide() {
    let previous = currentSlide - 1;

    if (previous < 0) {
        previous = slides.length - 1;
    }

    showSlide(previous);
}

/* Botão próximo */
nextButton.addEventListener("click", nextSlide);

/* Botão anterior */
prevButton.addEventListener("click", previousSlide);

/* Indicadores */
dots.forEach(function(dot) {
    dot.addEventListener("click", function() {
        const index = Number(dot.dataset.slide);
        showSlide(index);
    });
});

/* Troca automática */
setInterval(nextSlide, 5000);


/* ========================================= ANIMAÇÃO DA TOPNAV NO SCROLL ========================================= */

const header = document.querySelector("header");
const logoImg = document.querySelector(".nav-logo img");
const imageSlider = document.querySelector(".image-slider");

// Pré-carrega a imagem da logo escura na memória para evitar o 'bug/piscar' na troca
const logoEscura = new Image();
logoEscura.src = "./img/LogoEsperancaAtivaNGTV.png";

const logoClaraPath = "./img/LogoEsperancaAtivaNGTV.png";
const logoEscuraPath = "./img/LogoEsperancaAtiva.png";

window.addEventListener("scroll", function() {
    if (!imageSlider) return;

    const sliderHeight = imageSlider.offsetHeight;

    if (window.scrollY >= sliderHeight - 80) {
        if (!header.classList.contains("scrolled")) {
            header.classList.add("scrolled");
            logoImg.src = logoEscuraPath;
        }
    } else {
        if (header.classList.contains("scrolled")) {
            header.classList.remove("scrolled");
            logoImg.src = logoClaraPath;
        }
    }
});