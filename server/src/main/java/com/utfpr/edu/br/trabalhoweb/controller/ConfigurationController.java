package com.utfpr.edu.br.trabalhoweb.controller;

import com.utfpr.edu.br.trabalhoweb.dto.ConfigurationDTO;
import com.utfpr.edu.br.trabalhoweb.service.ConfigurationService;
import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/configurations")
public class ConfigurationController {
    private final ConfigurationService configurationService;

    public ConfigurationController(ConfigurationService configurationService) {
        this.configurationService = configurationService;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ConfigurationDTO> getConfiguration(@PathVariable Long userId) {
        ConfigurationDTO response = configurationService.getConfiguration(userId);
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<ConfigurationDTO> saveConfiguration(
            @Valid @RequestBody ConfigurationDTO configDTO) {
        ConfigurationDTO response = configurationService.saveConfiguration(configDTO);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/user/{userId}")
    public ResponseEntity<ConfigurationDTO> updateConfiguration(
            @PathVariable Long userId,
            @Valid @RequestBody ConfigurationDTO configDTO) {
        ConfigurationDTO response = configurationService.saveConfiguration(configDTO);
        return ResponseEntity.ok(response);
    }
}