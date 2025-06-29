package com.utfpr.edu.br.trabalhoweb.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "configurations")
public class Configuration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name", length = 200)
    private String user;

    @Column(name = "default_location", length = 200)
    private String defaultLocation;

    @Column(name = "use_gps", nullable = false)
    private Boolean useGps = true;

    @Column(name = "language", nullable = false)
    private String language;
}