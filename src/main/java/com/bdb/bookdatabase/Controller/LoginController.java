package com.bdb.bookdatabase.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdb.bookdatabase.Repository.UserRepository;
import com.bdb.bookdatabase.model.User;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping(value = "/register")
    public ResponseEntity<String> registerUser(User user) {

        if (userRepository.findByLogin(user.getEmail()) != null) {
            return new ResponseEntity<>("Nome de Usuario já existe", HttpStatus.BAD_REQUEST);
        }
        userRepository.save(user);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "/Login");

        return new ResponseEntity<>(headers, HttpStatus.FOUND);

    }

    @PostMapping(value = "/login")
    public ResponseEntity<String> loginUser(User loginUser) {
        User user = userRepository.findByLogin(loginUser.getEmail());

        if (user == null || !user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Email ou senha incorretos");
        }
        HttpHeaders headers = new HttpHeaders();

        headers.add("Location", "/");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
