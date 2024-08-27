// uma função que recebe ua lista de livros e o id da tag em html pra colocar a lista
function colecaoLivros (livros, id) {
    const colecao = document.getElementById(id)
    colecao.innerHTML += livros.map(livro => (
	// mudar aqui as info dos livros que vão aparecer na tela
        `<div>
            <h3>${livro.nome}</h3>
            <h3>${livro.nota}</h3>
            <h3>${livro.sinopse}</h3>
        </div>`
    ))
}
