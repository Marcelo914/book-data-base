// uma função que recebe ua lista de livros e o id da tag em html pra colocar a lista
export default function colecaoLivros (livros, id) {
    const livros = [{nome: 'Harry Potter', foto: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg'}, 
        {nome: 'Percy Jackson', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ikkp7NiRDtPzUd8ArvowH-nPtAQLMqfcjg&s'},
        {nome: 'O Hobbit', foto: 'https://m.media-amazon.com/images/I/511+-lOOtsL._SY445_SX342_.jpg'}, 
        {nome: 'O Senhor dos Aneis', foto: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg'},
        {nome: 'Alice no País das Maravilhas', foto: 'https://m.media-amazon.com/images/I/51IrLZVGXuL._SY445_SX342_.jpg'}]
        const colecao = document.getElementById('colecao')
        colecao.innerHTML += livros.map(livro => (
            // mudar aqui as info dos livros que vão aparecer na tela
            `<div>
	    	    <img src="${livro.foto}" alt="capa de ${livro.nome}">
            	    <h3>${livro.nome}</h3>
        	</div>`
        )).join('')
        colecao.innerHTML += `<button class="maisColecao" type="button">MAIS DA CATEGORIA</button>`
}
