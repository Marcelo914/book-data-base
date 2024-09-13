package com.bdb.bookdatabase.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table
public class CategoriaLivro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @ManyToOne
    @JoinColumn(name = "book_id", nullable = false)
    private Book livroId;

    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoriaId;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Book getLivroId() {
        return livroId;
    }

    public void setLivroId(Book livroId) {
        this.livroId = livroId;
    }

    public Categoria getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(Categoria categoriaId) {
        this.categoriaId = categoriaId;
    }

}
