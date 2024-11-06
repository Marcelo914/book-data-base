// bookDetails.js
document.addEventListener("DOMContentLoaded", function () {
    // Simulando dados do livro (substitua esses dados com os que vêm da API)
    const bookData = {
        title: "Harry Potter e a Pedra Filosofal",
        author: "J.K. Rowling",
        publisher: "Bloomsbury",
        publishedDate: "1997-06-26",
        description: "Harry Potter descobre que é um bruxo e embarca em uma aventura mágica na escola de Hogwarts.",
        imageUrl: "https://m.media-amazon.com/images/I/81ibfYk4qmL._SY425_.jpg"
    };

    // Populando os elementos com dados do livro
    document.getElementById("bookTitle").textContent = bookData.title;
    document.getElementById("bookAuthor").textContent = "Autor: " + bookData.author;
    document.getElementById("bookPublisher").textContent = "Editora: " + bookData.publisher;
    document.getElementById("bookPublishedDate").textContent = "Data de Publicação: " + bookData.publishedDate;
    document.getElementById("bookDescription").textContent = "Descrição: " + bookData.description;

    // Carregando a imagem do livro
    const bookImage = document.getElementById("bookImage");
    bookImage.src = bookData.imageUrl || "https://m.media-amazon.com/images/I/81ibfYk4qmL._SY425_.jpg";
});
