// bookDetails.js
const book = {}
document.addEventListener("DOMContentLoaded", function () {
    const q = window.location.href.split('?id=')[1];
    book.id = q;
    try {
        fetch('https://www.googleapis.com/books/v1/volumes/' + q)
            .then(function (response) {
                response.json()
                    .then(function(x) { 
                        if (x.volumeInfo.title) {
                            document.getElementById("bookTitle").textContent = x.volumeInfo.title;
                            book.title = x.volumeInfo.title;
                        }
                        if (x.volumeInfo.authors) {
                            document.getElementById("bookAuthor").textContent = "Autor: " + x.volumeInfo.authors[0];
                        }
                        if (x.volumeInfo.publisher) {
                            document.getElementById("bookPublisher").textContent = "Editora: " + x.volumeInfo.publisher;
                        }
                        if (x.volumeInfo.publishedDate) {
                            document.getElementById("bookPublishedDate").textContent = "Data de Publicação: " + x.volumeInfo.publishedDate;
                        }
                        if (x.volumeInfo.description) {
                            document.getElementById("bookDescription").textContent = "Descrição: " + x.volumeInfo.description.split(/<[^>]*>/).join('');
                        }
                        if (x.volumeInfo.imageLinks.thumbnail) {
                            document.getElementById("bookImage").src = x.volumeInfo.imageLinks.thumbnail
                        }
                    }) 
            })
    } catch (e) {
        console.log(e)
    }
});
