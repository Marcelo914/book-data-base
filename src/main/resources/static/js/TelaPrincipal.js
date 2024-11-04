const slides = document.querySelectorAll('.carousel-slide');
const pontos = document.querySelectorAll('.Pontos .ponto');

let currentSlide = 0;

function showSlide(index) {
  
    currentSlide = index;

    slides.forEach(slide => slide.classList.remove('active-slide'));
    
    slides[index].classList.add('active-slide');

    pontos.forEach(ponto => ponto.classList.remove('ponto-ativo'));

    pontos[index].classList.add('ponto-ativo');
}

showSlide(0);

pontos.forEach((ponto, index) => {
    ponto.addEventListener('click', () => {
        showSlide(index);
    });
});


function autoPlay() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(autoPlay, 3000);
