// bookDetails.js
document.addEventListener("DOMContentLoaded", function () {
    const q = window.location.href.split('?id=')[1];
    try {
        fetch('http://localhost:8080/books/' + q)
            .then(function (response) {
                response.json()
                    .then(function(x) { 
                        if (x.title) {
                            document.getElementById("bookTitle").textContent = x.title;
                        }
                        if (x.author) {
                            document.getElementById("bookAuthor").textContent = "Autor: " + x.author;
                        }
                        if (x.publisher) {
                            document.getElementById("bookPublisher").textContent = "Editora: " + x.publisher;
                        }
                        if (x.publishedDate) {
                            document.getElementById("bookPublishedDate").textContent = "Data de Publicação: " + x.publishedDate;
                        }
                        if (x.description) {
                            document.getElementById("bookDescription").textContent = "Descrição: " + x.description;
                        }
                        if (x.imageUrl) {
                            document.getElementById("bookImage").src = x.imageUrl
                        }
                    }) 
            })
    } catch (e) {
        console.log(e)
    }
});
