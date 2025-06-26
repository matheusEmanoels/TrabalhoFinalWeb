package com.utfpr.edu.br.trabalhoweb.dto;

import lombok.*;

@Data
@Builder
public class ConfigurationDTO {
    private Long id;
    private Long userId;  // Campo adicionado
    private String defaultLocation;
    private boolean useGps;
}