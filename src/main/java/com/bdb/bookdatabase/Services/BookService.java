package com.bdb.bookdatabase.Services;

import com.bdb.bookdatabase.model.Book;
import com.bdb.bookdatabase.Repository.BookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;
    //função para salvar o livro
    public Book saveBook(Book book){
        return bookRepository.save(book);
    }
    
    //le todos os livros pelo id
    public Optional<Book> searchBookById(String id){
        return bookRepository.findById(id);
    }
    //deletar pelo id
    public boolean deleteBook(String id){
        if (bookRepository.existsById(id)) {
            bookRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
