package com.utfpr.edu.br.trabalhoweb.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.util.List;

public class AssessmentDTO {

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class CreateRequest {
        private String name;
        private String location;
        private String user_name;

        @Size(max = 1000, message = "Descrição do manejo deve ter no máximo 1000 caracteres")
        private String managementDescription;

        @Size(max = 1000, message = "Outras observações deve ter no máximo 1000 caracteres")
        private String otherObservations;

        @Valid
        private List<SampleRequest> samples;

        private List<MultipartFile> images;


    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BasicResponse {
        private Long id;
        private String name;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        private String location;
        private String managementDescription;
        private String otherObservations;
        private Double averageScore;

        private List<SampleDTO> samples;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailResponse {
        private Long id;
        private String name;
        private LocalDateTime startTime;
        private LocalDateTime endTime;
        private String location;
        private String managementDescription;
        private String otherObservations;
        private Double averageScore;
        private List<SampleDTO> samples;
        private List<ImageData> images;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class FinalizeRequest {
        private String managementDescription;
        private String otherObservations;
    }


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SampleRequest {
        private String name;
        private String location;
        private String otherInfo;

        @Valid
        private List<LayerRequest> layers;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LayerRequest {
        private Integer layerNumber;
        private Double length;
        private Integer score;
    }

    @Data
    @Builder
    public static class ImageData {
        private Long id;
        private String fileName;
        private String contentType;
        private byte[] data; // BLOB da imagem
    }
}