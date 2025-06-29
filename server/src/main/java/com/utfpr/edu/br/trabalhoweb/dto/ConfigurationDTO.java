package com.utfpr.edu.br.trabalhoweb.dto;

import lombok.*;

@Data
@Builder
public class ConfigurationDTO {
    private Long id;
    private Long userId;
    private String defaultLocation;
    private boolean useGps;
    private String language;
}