package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.Assessment;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

    @Query("SELECT DISTINCT a FROM Assessment a LEFT JOIN FETCH a.samples")
    List<Assessment> findAllWithSamples();

    @Query("SELECT DISTINCT a FROM Assessment a LEFT JOIN FETCH a.images")
    List<Assessment> findAllWithImages();
}
