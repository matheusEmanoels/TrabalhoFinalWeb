package com.utfpr.edu.br.trabalhoweb.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SampleDTO {
    private Long id;

    @NotBlank(message = "Nome da amostra não pode estar vazio")
    @Size(max = 100, message = "Nome da amostra deve ter no máximo 100 caracteres")
    private String name;

    @Size(max = 200, message = "Localização deve ter no máximo 200 caracteres")
    private String location;

    @Size(max = 500, message = "Outras informações deve ter no máximo 500 caracteres")
    private String otherInfo;

    @NotNull(message = "Camadas não pode ser nulo")
    private List<LayerDTO> layers;
}