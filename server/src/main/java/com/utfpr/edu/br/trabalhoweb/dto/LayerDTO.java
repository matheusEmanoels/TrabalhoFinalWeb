package com.utfpr.edu.br.trabalhoweb.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LayerDTO {
    private Long id;

    @NotNull(message = "Número da camada não pode ser nulo")
    @Min(value = 1, message = "Número da camada deve ser no mínimo 1")
    private Integer layerNumber;

    @NotNull(message = "Comprimento não pode ser nulo")
    @Positive(message = "Comprimento deve ser positivo")
    private Double length;

    @NotNull(message = "Nota não pode ser nula")
    @Min(value = 1, message = "Nota mínima é 1")
    @Max(value = 5, message = "Nota máxima é 5")
    private Integer score;
}