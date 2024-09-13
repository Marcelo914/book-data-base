// uma função que recebe ua lista de livros e o id da tag em html pra colocar a lista
export default function colecaoLivros (livros, id) {
    const colecao = document.getElementById(id)
    colecao.innerHTML += livros.map(livro => (
	// mudar aqui as info dos livros que vão aparecer na tela
        `<div>
	    <img height="300" width"200" src="${livro.foto}" alt="capa de ${livro.nome}">
            <h3>${livro.nome}</h3>
        </div>`
    )).join('')
}
