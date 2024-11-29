package com.bdb.bookdatabase.Services;

import com.bdb.bookdatabase.model.Book;
import com.bdb.bookdatabase.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    // Método para salvar livro e capa
    public Book saveBook(Book book, MultipartFile cover) throws IOException {
        if (cover != null) {
            String coverUrl = saveCoverImage(cover);
            book.setCoverUrl(coverUrl);
        }
        return bookRepository.save(book);
    }

    private String saveCoverImage(MultipartFile cover) throws IOException {
        Path path = Paths.get("uploads/covers/");
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }

        String fileName = System.currentTimeMillis() + "_" + cover.getOriginalFilename();
        Path filePath = path.resolve(fileName);

        Files.copy(cover.getInputStream(), filePath);

        return "/covers/" + fileName;
    }

    public Optional<Book> searchBookById(String id) {
        return bookRepository.findById(id);
    }

    public boolean deleteBook(String id) {
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
