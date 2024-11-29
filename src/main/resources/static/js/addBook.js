document.addEventListener("DOMContentLoaded", () => {
    // Função para selecionar a capa do livro
    const coverPlaceholder = document.getElementById("cover-placeholder");
    let coverInput = null; // Variável para armazenar o input de arquivo

    coverPlaceholder.addEventListener("click", () => {
        coverInput = document.createElement("input");
        coverInput.type = "file";
        coverInput.accept = "image/*";

        coverInput.onchange = (event) => {
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

        coverInput.click();
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

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", () => {
        const bookData = {
            title: document.getElementById("titulo").value,
            publisher: document.getElementById("editora").value,
            author: document.getElementById("autor").value,
            pages: document.getElementById("paginas").value,
            series: document.getElementById("serie").value,
            volume: document.getElementById("volume").value,
            review: document.getElementById("resenha").value,
            synopsis: document.getElementById("sinopse").value,
            tag: document.getElementById("tags").value,
            yearRead: document.getElementById("anoLido").value,
            rating: rating,
        };

        const formData = new FormData();
        formData.append("book", JSON.stringify(bookData));

        if (coverInput && coverInput.files && coverInput.files.length > 0) {
            const coverFile = coverInput.files[0];
            formData.append("cover", coverFile);
        } else {
            console.warn("Nenhuma capa foi selecionada.");
        }

        fetch("/books", {
            method: "POST",
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log("Book added successfully", data);
            })
            .catch(error => {
                console.error("Failed to add book", error);
            });
    });
});
