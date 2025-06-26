package com.utfpr.edu.br.trabalhoweb.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "assessment_images")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AssessmentImages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] imageData;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] thumbnailData;

    private String contentType;
    private String fileName;

    @ManyToOne
    @JoinColumn(name = "assessment_id")
    private Assessment assessment;
}
