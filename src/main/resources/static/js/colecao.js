const categoriasLivros = {
    fantasia: [
        {id: 1, nome: 'Harry Potter', foto: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg'}, 
        {id: 2, nome: 'Percy Jackson', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ikkp7NiRDtPzUd8ArvowH-nPtAQLMqfcjg&s'},
        {id: 3, nome: 'Alice no País das Maravilhas', foto: 'https://m.media-amazon.com/images/I/51IrLZVGXuL._SY445_SX342_.jpg'},
        {id: 4, nome: 'O Nome do Vento (A Crônica do Matador do Rei - Livro 1)', foto: 'https://m.media-amazon.com/images/I/81CGmkRG9GL._SY425_.jpg'} 
    ],
    horror: [
        {id: 5, nome: 'A Paciente Silenciosa', foto: 'https://m.media-amazon.com/images/I/91R8S52UP6L._SY425_.jpg'},
        {id: 6, nome: 'A Ilha', foto: 'https://m.media-amazon.com/images/I/41TDJmh1YaL._SY445_SX342_.jpg'},
        {id: 7, nome: 'Razão Para Matar (Um mistério de Avery Black – Livro 1)', foto: 'https://m.media-amazon.com/images/I/91LETJnupVL._SY425_.jpg'},
        {id: 8, nome: 'Sombras Perigosas (Duologia Novo Sangue Livro 1)', foto: 'https://m.media-amazon.com/images/I/81z1eKINS+L._SY425_.jpg'}
    ],
    misterio: [
        {id: 9, nome: 'As Aventuras de Sherlock Holmes', foto: 'https://m.media-amazon.com/images/I/91lyZlVaNfL._SY425_.jpg'},
        {id: 10, nome: 'O Código Da Vinci', foto: 'https://m.media-amazon.com/images/I/41aVasi7pML._SY445_SX342_.jpg'},
        {id: 11, nome: 'A Empregada: Bem-Vinda à Família', foto: 'https://m.media-amazon.com/images/I/81EMPWukojL._SY425_.jpg'},
        {id: 12, nome: 'A Professora', foto: 'https://m.media-amazon.com/images/I/81PWPkqWmbL._SY425_.jpg'}
    ]
};

function colecaoLivros(colecaoId, livros) {
    const colecao = document.getElementById(colecaoId);
    if (colecao) {
        colecao.innerHTML = livros.map(livro => (

            `
            <a href="http://localhost:8080/Book?id=${livro.id}">
                <div>
                    <img src="${livro.foto}" alt="capa de ${livro.nome}">
                    <h3>${livro.nome}</h3>
                </div>
            </a>
            `

        )).join('');
        
         // Adiciona o botão "Mais da Categoria"
         const botaoMais = document.createElement('button');
         botaoMais.className = 'maisColecao';
         botaoMais.textContent = 'MAIS DA CATEGORIA';
         botaoMais.onclick = () => {
             alert(`Ver mais livros da categoria.`);
         };
         colecao.appendChild(botaoMais);
    }

    
}

// Chamadas para cada categoria com a lista específica de livros

colecaoLivros('colecao1', categoriasLivros.fantasia);
colecaoLivros('colecao2', categoriasLivros.horror);
colecaoLivros('colecao3', categoriasLivros.misterio);
