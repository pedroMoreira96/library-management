package org.example.librarymanagement;

import org.example.librarymanagement.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book, Long> {

}
