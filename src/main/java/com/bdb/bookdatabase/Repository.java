package com.bdb.bookdatabase;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bdb.bookdatabase.model.User;

public interface Repository extends JpaRepository<User, Long> {

}
