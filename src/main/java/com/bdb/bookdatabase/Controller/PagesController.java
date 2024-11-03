package com.bdb.bookdatabase.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// Controller de rotas para a página home
@Controller
public class PagesController {

    // procura pelo arquivo Login.html
    @GetMapping("/Login")
    public String Login() {
        return "Login";
    }

    @GetMapping("/forgetpassword")
    public String ForgetPassword() {
        return "recuperar_senha";
    }

    @GetMapping("/changepassword")
    public String ChangePassword() {
        return "nova_senha";
    }

    @GetMapping("/")
    public String HomePageLogin(){
        return "tela_principal";
    }

    @GetMapping("/Profile")
    public String Profile(){
        return "perfil";
    }

    @GetMapping("/SearchBook")
    public String SearchBook(){
        return "pesquisa_livro";
    }

    @GetMapping("/Layout") //Página criada para linkar com o JS e aparecer nas telas. NÃO APAGAR!!
    public String Layout(){
        return "layout";
    }

    @GetMapping("/AddBook")
    public String AddBook(){
        return "addBook";
    }

    @GetMapping("/Coleção")
    public String Colecao(){
        return "colecao";
    }
}
