document.addEventListener("DOMContentLoaded", () => {
    
    // Função para selecionar a capa do livro
    const coverPlaceholder = document.getElementById("cover-placeholder");
    coverPlaceholder.addEventListener("click", () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    coverPlaceholder.style.backgroundImage = `url(${e.target.result})`;
                    coverPlaceholder.style.backgroundSize = "cover";
                    coverPlaceholder.style.backgroundPosition = "center";
                    coverPlaceholder.style.color = "transparent";
                    coverPlaceholder.innerHTML = ""; // Remove o texto "Adicionar Capa"
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    });


    // Função para avaliação com estrelas
    const stars = document.querySelectorAll(".star");
    let rating = 0;

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", () => {
            highlightStars(index);
        });

        star.addEventListener("click", () => {
            rating = index + 1;
            highlightStars(index);
        });

        star.addEventListener("mouseleave", () => {
            highlightStars(rating - 1);
        });
    });

    function highlightStars(index) {
        stars.forEach((star, i) => {
            star.classList.toggle("selected", i <= index);
        });
    }
});
