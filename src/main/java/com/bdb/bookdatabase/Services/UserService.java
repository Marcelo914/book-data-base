// Simple user crud example
package com.bdb.bookdatabase.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bdb.bookdatabase.Repository.UserRepository;
import com.bdb.bookdatabase.model.User;
import com.bdb.bookdatabase.DTO.UserDTO;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(UserDTO userDto) {
        User user = new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());

        userRepository.save(user);
    }
}
