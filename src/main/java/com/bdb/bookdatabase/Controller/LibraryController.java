package com.bdb.bookdatabase.Controller;

import com.bdb.bookdatabase.model.Library;
import com.bdb.bookdatabase.Repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/libray")
public class LibraryController {
    @Autowired
    private LibraryRepository libraryRepository;

    @PostMapping
    public ResponseEntity<Library> addBookInLibrary(@RequestBody Library library) {
        return new ResponseEntity<>(libraryRepository.save(library), HttpStatus.CREATED);
    }
}
