package com.bdb.bookdatabase.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bdb.bookdatabase.Repository.UserRepository;
import com.bdb.bookdatabase.model.User;
import com.bdb.bookdatabase.model.UserRole;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(value = "/register")
    public ResponseEntity<String> registerUser(User user) {

        if (userRepository.findByEmail(user.getEmail()) != null) {
            return new ResponseEntity<>("Nome de Usuario já existe", HttpStatus.BAD_REQUEST);
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        user.setRole(UserRole.USER);
        user.setAccountNonExpired(true);
        user.setAccountNonLocked(true);
        user.setCredentialsNonExpired(true);
        user.setEnabled(true);
        userRepository.save(user);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", "/Login");

        return new ResponseEntity<>(headers, HttpStatus.FOUND);

    }

    @PostMapping(value = "/login")
    public ResponseEntity<String> loginUser(User loginUser) {
        User user = userRepository.findByEmail(loginUser.getEmail());

        if (!passwordEncoder.matches(loginUser.getPassword(), user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("email ou senha invalidos");
        }

        HttpHeaders headers = new HttpHeaders();

        headers.add("Location", "/");
        return new ResponseEntity<>(headers, HttpStatus.FOUND);
    }
}
