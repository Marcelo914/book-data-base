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

document.getElementById("addBook").addEventListener("click", function() {
    window.location.href = "AddBook";
});