document.querySelector('.menu-button').addEventListener('click', function() {
    alert('Menu button clicked!');
});

document.querySelector('.search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    alert('Searching for: ' + query);
});
