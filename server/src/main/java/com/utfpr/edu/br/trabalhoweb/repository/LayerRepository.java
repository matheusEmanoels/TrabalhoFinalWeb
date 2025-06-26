package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.Layer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LayerRepository extends JpaRepository<Layer, Long> {

    // Busca camadas por amostra
    List<Layer> findBySampleId(Long sampleId);

    // Busca camadas com score específico
    List<Layer> findByScore(Integer score);
}