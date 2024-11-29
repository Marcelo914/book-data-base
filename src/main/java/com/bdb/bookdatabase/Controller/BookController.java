package com.bdb.bookdatabase.Controller;

import com.bdb.bookdatabase.model.Book;
import com.bdb.bookdatabase.Services.BookService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping
    public ResponseEntity<Book> createBook(
            @RequestParam("book") String bookData,
            @RequestParam(value = "cover", required = false) MultipartFile cover) throws IOException {

        Book book = new ObjectMapper().readValue(bookData, Book.class);

        Book newBook = bookService.saveBook(book, cover);

        return new ResponseEntity<>(newBook, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> searchBookById(@PathVariable String id) {
        Optional<Book> book = bookService.searchBookById(id);
        return book.map(ResponseEntity::ok).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable String id) {
        boolean deleted = bookService.deleteBook(id);
        if (deleted) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
