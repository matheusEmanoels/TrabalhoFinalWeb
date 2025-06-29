package com.utfpr.edu.br.trabalhoweb.service;

import com.utfpr.edu.br.trabalhoweb.dto.ConfigurationDTO;
import com.utfpr.edu.br.trabalhoweb.model.Configuration;
import com.utfpr.edu.br.trabalhoweb.repository.ConfigurationRepository;
import com.utfpr.edu.br.trabalhoweb.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ConfigurationService {
    private final ConfigurationRepository configurationRepository;
    private final UserRepository userRepository;

    @Transactional
    public ConfigurationDTO saveConfiguration(ConfigurationDTO configDTO) {

        Optional<Configuration> existingConfig = configurationRepository.findByUserId(configDTO.getUserId());
        Configuration configuration = existingConfig.orElseGet(() -> new Configuration());
        configuration.setDefaultLocation(configDTO.getDefaultLocation());
        configuration.setUseGps(configDTO.isUseGps());
        configuration.setLanguage(configDTO.getLanguage());

        Configuration savedConfig = configurationRepository.save(configuration);
        return convertToDTO(savedConfig);
    }

    @Transactional(readOnly = true)
    public ConfigurationDTO getConfiguration(Long userId) {
        return configurationRepository.findByUserId(userId)
                .map(this::convertToDTO)
                .orElseThrow(() -> new RuntimeException("Configuração não encontrada"));
    }

    private ConfigurationDTO convertToDTO(Configuration config) {
        return ConfigurationDTO.builder()
                .id(config.getId())
                .defaultLocation(config.getDefaultLocation())
                .useGps(config.getUseGps())
                .language(config.getLanguage())
                .build();
    }
}
