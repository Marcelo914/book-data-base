function displayBooks(books) {
    const colecaoContainer = document.getElementById('results')
    colecaoContainer.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div')
        bookItem.classList.add('book-item')

        const bookTitle = document.createElement('h3')
        bookTitle.textContent = book.volumeInfo.title


        const bookImage = document.createElement('img')
        if (book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail) {
            bookImage.src = book.volumeInfo.imageLinks.thumbnail
        } else {
            bookImage.src = 'default-thumbnail.jpg'
        }

        bookItem.appendChild(bookImage)
        bookItem.appendChild(bookTitle)

        colecaoContainer.appendChild(bookItem)
    });
}

async function searchBook(query) {
    fetch("http://localhost:8080/search", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => response.json())
        .then(data => {
            if (data.items && data.length > 0) {
                displayBooks(data.items)
            } else {
                console.log("nenhum livro encontrado")
            }
        })
        .catch(error => {
            console.error("erro ao buscar livros: ", error);
        })
}

