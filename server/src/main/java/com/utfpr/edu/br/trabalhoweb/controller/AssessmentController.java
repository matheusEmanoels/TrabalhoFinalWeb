package com.utfpr.edu.br.trabalhoweb.controller;

import com.utfpr.edu.br.trabalhoweb.dto.AssessmentDTO;
import com.utfpr.edu.br.trabalhoweb.service.AssessmentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/assessments")
@RequiredArgsConstructor
public class AssessmentController {
    private final AssessmentService assessmentService;

    @PostMapping
    public ResponseEntity<AssessmentDTO.BasicResponse> createAssessmentWithSamples(
            @Valid @RequestBody AssessmentDTO.CreateRequest request) {
        AssessmentDTO.BasicResponse response = assessmentService.createAssessmentWithSamples(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<AssessmentDTO.DetailResponse> getAssessmentDetails(
            @PathVariable Long id) {
        AssessmentDTO.DetailResponse response = assessmentService.getAssessmentDetails(id);
        return ResponseEntity.ok(response);
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