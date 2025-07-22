const miniaturas = document.querySelectorAll('.miniatura');
const visor = document.getElementById('visor');
const imagenGrande = document.getElementById('imagenGrande');
const cerrar = document.getElementById('cerrar');


miniaturas.forEach(img => {
  img.addEventListener('click', () => {
    imagenGrande.src = img.src;
    visor.classList.remove('oculto');
  });
});


cerrar.addEventListener('click', () => {
  visor.classList.add('oculto');
});


visor.addEventListener('click', (e) => {
  if (e.target === visor) {
    visor.classList.add('oculto');
  }
});






const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.dots-container');


let currentIndex = 0;
const slideCount = slides.length;


// Función para actualizar la posición del slider
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}


// Función para ir a la slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}


// Función para ir a la siguiente slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}


// Función para crear los puntos indicadores
function createDots() {
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();
}


// Función para actualizar el estado de los puntos
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}
// Event listeners para los botones
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);


// Crear los puntos al cargar la página
createDots();


// Opcional: Autoplay del slider
// setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
