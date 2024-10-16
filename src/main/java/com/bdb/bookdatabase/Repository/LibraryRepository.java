package com.bdb.bookdatabase.Repository;

import com.bdb.bookdatabase.model.Library;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LibraryRepository extends JpaRepository<Library, Long>{

}
