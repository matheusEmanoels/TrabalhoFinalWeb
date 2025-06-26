package com.utfpr.edu.br.trabalhoweb.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.utfpr.edu.br.trabalhoweb.dto.AssessmentDTO;
import com.utfpr.edu.br.trabalhoweb.service.AssessmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/assessments")
@RequiredArgsConstructor
public class AssessmentController {
    private final AssessmentService assessmentService;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<AssessmentDTO.BasicResponse> createAssessment(
            @RequestPart("assessment") String assessmentJson,
            @RequestPart(value = "images", required = false) List<MultipartFile> images) throws JsonProcessingException { // Adicione required=false

        ObjectMapper mapper = new ObjectMapper();
        AssessmentDTO.CreateRequest request = mapper.readValue(assessmentJson, AssessmentDTO.CreateRequest.class);

        if(images != null) {
            request.setImages(images);
        }

        AssessmentDTO.BasicResponse response = assessmentService.createAssessmentWithSamples(request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssessmentDTO.DetailResponse> getAssessmentDetails(
            @PathVariable Long id) {
        AssessmentDTO.DetailResponse response = assessmentService.getAssessmentDetails(id);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<AssessmentDTO.BasicResponse>> getAllAssessments() {
        return ResponseEntity.ok(assessmentService.getAllAssessments());
    }


    @PutMapping("/{id}/finalize")
    public ResponseEntity<AssessmentDTO.BasicResponse> finalizeAssessment(
            @PathVariable Long id,
            @Valid @RequestBody AssessmentDTO.FinalizeRequest request) {
        AssessmentDTO.BasicResponse response = assessmentService.finalizeAssessment(id, request);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<AssessmentDTO.BasicResponse>> getUserAssessments(
            @PathVariable Long userId) {
        List<AssessmentDTO.BasicResponse> responses = assessmentService.getUserAssessments(userId);
        return ResponseEntity.ok(responses);
    }
}