package com.bdb.bookdatabase.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Functions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;

    private String functions;

    @ManyToOne
    @JoinColumn(name = "envolvidos_id")
    private Envolvidos envolvidos;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public String getFunctions() {
        return functions;
    }

    public void setFunctions(String functions) {
        this.functions = functions;
    }

    public Envolvidos getEnvolvidos() {
        return envolvidos;
    }

    public void setEnvolvidos(Envolvidos envolvidos) {
        this.envolvidos = envolvidos;
    }
}
