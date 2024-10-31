package com.bdb.bookdatabase.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bdb.bookdatabase.DTO.UserDTO;
import com.bdb.bookdatabase.Services.UserService;
import com.bdb.bookdatabase.model.User;

@RestController
@RequestMapping("/user/userdata/")
public class userController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
        User user = userService.findUserById(id);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        UserDTO userDTO = new UserDTO();
        userDTO.setName(user.getName());

        return ResponseEntity.ok(userDTO);
    }
}
