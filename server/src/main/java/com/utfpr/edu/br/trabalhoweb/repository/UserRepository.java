package com.utfpr.edu.br.trabalhoweb.repository;

import com.utfpr.edu.br.trabalhoweb.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // Busca por email (unique)
    Optional<User> findByEmail(String email);

    // Verifica se email existe
    boolean existsByEmail(String email);
}
