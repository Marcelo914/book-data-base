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

//Js para o perfil 

async function userName(id){
    try{
        const response = await fetch(`http://localhost:8080/user/userdata/${id}`);

        if (!response.ok) {
            throw new Error("Erro ao buscar o usuário");
        }


        const data = await response.json();

        const user_name = data.name;


        const elementName = document.getElementById('nome_img');
        elementName.textContent = user_name;

        console.log(`User Id: ${user_id}, User Name: ${user_name}`)
    }catch(error){
        console.error(error);
    }
}
userName(1)

document.getElementById("addBook").addEventListener("click", function() {
    window.location.href = "AddBook";
}); // fim do perfil