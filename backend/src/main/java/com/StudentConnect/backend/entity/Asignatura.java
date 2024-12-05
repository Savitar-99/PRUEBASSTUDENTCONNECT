package com.StudentConnect.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Asignatura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAsignatura;

    @Column(nullable = false, length = 100)
    private String nombreAsignatura;

    @Column(columnDefinition = "TEXT")
    private String descripcion;
 
}
