package com.bdb.bookdatabase.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

// Controller de rotas para a página home
@Controller
public class PageController {

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
    public String HomePage() {
        return "tela_principal";
    }
}
