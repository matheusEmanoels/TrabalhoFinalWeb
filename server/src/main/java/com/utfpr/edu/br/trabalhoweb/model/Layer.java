package com.utfpr.edu.br.trabalhoweb.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "layers")
public class Layer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sample_id", nullable = false)
    private Sample sample;

    @Column(name = "layer_number", nullable = false)
    @Min(1) @Max(10)
    private Integer layerNumber;

    @Column(nullable = false)
    @Positive
    private Double length;

    @Column(nullable = false)
    @Min(1) @Max(5)
    private Integer score;
}