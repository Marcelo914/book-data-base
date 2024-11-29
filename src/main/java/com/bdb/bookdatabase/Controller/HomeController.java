package com.bdb.bookdatabase.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    @PostMapping("/")
    public String Login() {
        return "tela_principal";
    }
}
