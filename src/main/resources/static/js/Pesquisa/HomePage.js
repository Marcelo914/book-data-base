const searchButton = document.querySelector('.search-button')
const searchInput = document.getElementById('search-input')
const colecaoContainer = document.getElementById('colecao')

function displayBooks(books) {
    const colecaoContainer = document.getElementById('colecao')
    colecaoContainer.innerHTML = '';

    books.forEach(book => {
        const bookLink = document.createElement('a')
        bookLink.href = "http://localhost:8080/Book?id=" + book.id;

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

        bookLink.appendChild(bookImage)
        bookLink.appendChild(bookTitle)
        bookItem.appendChild(bookLink)

        colecaoContainer.appendChild(bookItem)
    });
}

document.querySelector('.search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;

    fetch('http://localhost:8080/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.items) {
                displayBooks(data.items)
            } else {
                document.getElementById('colecao').innerHTML = "Nenhum resultado encontrado"
            }
        })
        .catch(error => {
            console.error('Erro: ', error);
        });
});


