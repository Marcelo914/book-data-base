// Simple user crud example
package com.bdb.bookdatabase.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import com.bdb.bookdatabase.Repository;
import com.bdb.bookdatabase.model.User;

@Service
public class UserService {

    @Autowired
    private Repository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public User saveUser(User name) {
        return userRepository.save(name);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
