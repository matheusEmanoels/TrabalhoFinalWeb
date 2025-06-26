package com.utfpr.edu.br.trabalhoweb.service;

import com.utfpr.edu.br.trabalhoweb.dto.AssessmentDTO;
import com.utfpr.edu.br.trabalhoweb.dto.LayerDTO;
import com.utfpr.edu.br.trabalhoweb.dto.SampleDTO;
import com.utfpr.edu.br.trabalhoweb.model.Assessment;
import com.utfpr.edu.br.trabalhoweb.model.Layer;
import com.utfpr.edu.br.trabalhoweb.model.Sample;
import com.utfpr.edu.br.trabalhoweb.model.User;
import com.utfpr.edu.br.trabalhoweb.repository.AssessmentRepository;
import com.utfpr.edu.br.trabalhoweb.repository.SampleRepository;
import com.utfpr.edu.br.trabalhoweb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AssessmentService {
    private final AssessmentRepository assessmentRepository;
    private final UserRepository userRepository;
    private final SampleRepository sampleRepository;

    @Transactional
    public AssessmentDTO.BasicResponse createAssessmentWithSamples(AssessmentDTO.CreateRequest request) {
        
        Assessment assessment = Assessment.builder()
                .name(request.getName())
                .location(request.getLocation())
                .managementDescription(request.getManagementDescription())
                .otherObservations(request.getOtherObservations())
                .startTime(LocalDateTime.now())
                .build();

        if (request.getUserId() != null) {
            User user = userRepository.findById(request.getUserId())
                    .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
            assessment.setUser(user);
        }

        if (request.getSamples() != null) {
            List<Sample> samples = request.getSamples().stream()
                    .map(sampleRequest -> {
                        Sample sample = Sample.builder()
                                .name(sampleRequest.getName())
                                .location(sampleRequest.getLocation())
                                .otherInfo(sampleRequest.getOtherInfo())
                                .assessment(assessment)
                                .build();

                        if (sampleRequest.getLayers() != null) {
                            List<Layer> layers = sampleRequest.getLayers().stream()
                                    .map(layerRequest -> Layer.builder()
                                            .layerNumber(layerRequest.getLayerNumber())
                                            .length(layerRequest.getLength())
                                            .score(layerRequest.getScore())
                                            .sample(sample)
                                            .build())
                                    .collect(Collectors.toList());
                            sample.setLayers(layers);
                        }

                        return sample;
                    })
                    .collect(Collectors.toList());

            assessment.setSamples(samples);
        }

        Assessment savedAssessment = assessmentRepository.save(assessment);
        return convertToResponseDTO(savedAssessment);
    }

    @Transactional
    public AssessmentDTO.BasicResponse createAssessment(AssessmentDTO.CreateRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        Assessment assessment = Assessment.builder()
                .user(user)
                .name(request.getName())
                .location(request.getLocation())
                .startTime(LocalDateTime.now())
                .build();

        Assessment savedAssessment = assessmentRepository.save(assessment);
        return convertToBasicResponseDTO(savedAssessment);
    }

    @Transactional(readOnly = true)
    public AssessmentDTO.DetailResponse getAssessmentDetails(Long id) {
        Assessment assessment = assessmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação não encontrada"));

        List<Sample> samples = sampleRepository.findByAssessmentId(id);
        assessment.setSamples(samples);

        return convertToDetailResponseDTO(assessment);
    }

    @Transactional
    public AssessmentDTO.BasicResponse finalizeAssessment(Long id, AssessmentDTO.FinalizeRequest request) {
        Assessment assessment = assessmentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Avaliação não encontrada"));

        assessment.setEndTime(LocalDateTime.now());
        assessment.setManagementDescription(request.getManagementDescription());
        assessment.setOtherObservations(request.getOtherObservations());
        assessment.setAverageScore(calculateAverageScore(assessment));

        Assessment updated = assessmentRepository.save(assessment);
        return convertToBasicResponseDTO(updated);
    }

    @Transactional(readOnly = true)
    public List<AssessmentDTO.BasicResponse> getUserAssessments(Long userId) {
        List<Assessment> assessments = assessmentRepository.findByUserId(userId);
        return assessments.stream()
                .map(this::convertToBasicResponseDTO)
                .toList();
    }

    private Double calculateAverageScore(Assessment assessment) {
        return assessment.getSamples().stream()
                .flatMap(s -> s.getLayers().stream())
                .mapToInt(Layer::getScore)
                .average()
                .orElse(0.0);
    }

    // Métodos de conversão
    private AssessmentDTO.BasicResponse convertToBasicResponseDTO(Assessment assessment) {
        return AssessmentDTO.BasicResponse.builder()
                .id(assessment.getId())
                .name(assessment.getName())
                .startTime(assessment.getStartTime())
                .endTime(assessment.getEndTime())
                .location(assessment.getLocation())
                .averageScore(assessment.getAverageScore())
                .build();
    }

    private AssessmentDTO.DetailResponse convertToDetailResponseDTO(Assessment assessment) {
        return AssessmentDTO.DetailResponse.builder()
                .id(assessment.getId())
                .name(assessment.getName())
                .startTime(assessment.getStartTime())
                .endTime(assessment.getEndTime())
                .location(assessment.getLocation())
                .managementDescription(assessment.getManagementDescription())
                .otherObservations(assessment.getOtherObservations())
                .averageScore(assessment.getAverageScore())
                .samples(assessment.getSamples().stream()
                        .map(this::convertSampleToDTO)
                        .toList())
                .build();
    }

    private SampleDTO convertSampleToDTO(Sample sample) {
        return SampleDTO.builder()
                .id(sample.getId())
                .name(sample.getName())
                .location(sample.getLocation())
                .otherInfo(sample.getOtherInfo())
                .layers(sample.getLayers().stream()
                        .map(this::convertLayerToDTO)
                        .toList())
                .build();
    }

    private LayerDTO convertLayerToDTO(Layer layer) {
        return LayerDTO.builder()
                .id(layer.getId())
                .layerNumber(layer.getLayerNumber())
                .length(layer.getLength())
                .score(layer.getScore())
                .build();
    }

    private AssessmentDTO.BasicResponse convertToResponseDTO(Assessment assessment) {
        return AssessmentDTO.BasicResponse.builder()
                .id(assessment.getId())
                .name(assessment.getName())
                .startTime(assessment.getStartTime())
                .endTime(assessment.getEndTime())
                .location(assessment.getLocation())
                .managementDescription(assessment.getManagementDescription())
                .otherObservations(assessment.getOtherObservations())
                .averageScore(assessment.getAverageScore())
                .build();
    }
}