// isso aqui tá dando erro não sei pq e precisei comentar pra conseguir executar meu código
// export default function colecaoLivros(livros, id) {
//     const livros = [{ nome: 'Harry Potter', foto: 'https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF894,1000_QL80_.jpg' },
//     { nome: 'Percy Jackson', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ikkp7NiRDtPzUd8ArvowH-nPtAQLMqfcjg&s' },
//     { nome: 'O Hobbit', foto: 'https://m.media-amazon.com/images/I/511+-lOOtsL._SY445_SX342_.jpg' },
//     { nome: 'O Senhor dos Aneis', foto: 'https://m.media-amazon.com/images/I/41RBd2DvmgL._SY445_SX342_.jpg' },
//     { nome: 'Alice no País das Maravilhas', foto: 'https://m.media-amazon.com/images/I/51IrLZVGXuL._SY445_SX342_.jpg' }]
//     const colecao = document.getElementById('colecao')
//     colecao.innerHTML += livros.map(livro => (
//         // mudar aqui as info dos livros que vão aparecer na tela
//         `<div>
// 	    	    <img src="${livro.foto}" alt="capa de ${livro.nome}">
//             	    <h3>${livro.nome}</h3>
//         	</div>`
//     )).join('')
//     colecao.innerHTML += `<button class="maisColecao" type="button">MAIS DA CATEGORIA</button>`
// }


async function userName(id){
    try{
        const response = await fetch(`http://localhost:8080/user/userdata/${id}`);

        if (!response.ok) {
            throw new Error("Erro ao buscar o usuário");
        }


        const data = await response.json();

        const user_name = data.name;


        const elementName = document.getElementById('nome_img');
        elementName.textContent = user_name;

        console.log(`User Id: ${user_id}, User Name: ${user_name}`)
    }catch(error){
        console.error(error)
    }
}

userName(1)

