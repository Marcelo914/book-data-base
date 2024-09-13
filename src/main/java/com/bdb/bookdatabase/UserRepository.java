package com.bdb.bookdatabase;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bdb.bookdatabase.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByName(String name);

    User findByEmail(String email);

}
