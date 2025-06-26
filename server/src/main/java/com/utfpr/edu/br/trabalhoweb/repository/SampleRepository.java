package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.Sample;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SampleRepository extends JpaRepository<Sample, Long> {

    // Busca amostras por avaliação
    List<Sample> findByAssessmentId(Long assessmentId);

    // Busca amostras por nome (case-insensitive)
    List<Sample> findByNameContainingIgnoreCase(String namePart);
}