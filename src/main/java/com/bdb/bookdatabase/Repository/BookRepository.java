package com.bdb.bookdatabase.Repository;

import com.bdb.bookdatabase.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, String> {

}
