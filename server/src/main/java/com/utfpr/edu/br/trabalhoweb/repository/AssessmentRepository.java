package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.Assessment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

    // Busca avaliações por usuário
    List<Assessment> findByUserId(Long userId);

    // Busca avaliações entre datas
    List<Assessment> findByStartTimeBetween(LocalDateTime start, LocalDateTime end);

    // Busca avaliações com score médio maior que X
    List<Assessment> findByAverageScoreGreaterThan(Double minScore);


}
