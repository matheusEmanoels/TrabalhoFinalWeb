package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ConfigurationRepository extends JpaRepository<Configuration, Long> {

    // Busca configuração por usuário
    Optional<Configuration> findByUserId(Long userId);
}
