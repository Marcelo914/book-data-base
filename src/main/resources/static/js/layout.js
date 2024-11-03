function loadLayout() {
    fetch('Layout')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar layout: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('layout-container').innerHTML = data;
            console.log('Layout carregado com sucesso.');
        })
        .catch(error => console.error('Erro ao carregar o layout:', error));
}

loadLayout();

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});
