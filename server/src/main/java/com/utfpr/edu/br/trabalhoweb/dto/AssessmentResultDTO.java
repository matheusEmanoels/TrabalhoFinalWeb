package com.utfpr.edu.br.trabalhoweb.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssessmentResultDTO {
    private Long assessmentId;
    private String assessmentName;
    private Double averageScore;
    private String managementRecommendation;
    private Integer totalSamples;
    private Duration evaluationDuration;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
