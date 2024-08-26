document.querySelector('.menu-button').addEventListener('click', function() {
    alert('Menu button clicked!');
});

document.querySelector('.search-button').addEventListener('click', function() {
    var query = document.getElementById('search-input').value;
    // alert('Searching for: ' + query);

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro: ', error);
        });
});
