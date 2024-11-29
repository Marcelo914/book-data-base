package com.bdb.bookdatabase.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bdb.bookdatabase.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByEmail(String email);

}
