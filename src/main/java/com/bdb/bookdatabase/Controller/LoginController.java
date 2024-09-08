package com.bdb.bookdatabase.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bdb.bookdatabase.UserRepository;
import com.bdb.bookdatabase.model.User;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userRepository.findByName(user.getName()) != null) {
            return new ResponseEntity<>("Nome de Usuario já existe", HttpStatus.BAD_REQUEST);
        }
        userRepository.save(user);
        return new ResponseEntity<>("Usuario registrado com sucesso", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User loginUser) {
        User user = userRepository.findByName(loginUser.getName());
        if (user == null || !user.getPassword().equals(loginUser.getPassword())) {
            return new ResponseEntity<>("Invalido usuario ou senha", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>("Login efetuado com sucesso", HttpStatus.OK);
    }
}
