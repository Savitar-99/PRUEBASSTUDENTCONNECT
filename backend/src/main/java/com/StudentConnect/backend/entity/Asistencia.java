package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
public class Asistencia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAsistencia;

    @Column(nullable = false)
    private LocalDate fecha;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private EstadoAsistencia estado;

    public enum EstadoAsistencia {
        PRESENTE, AUSENTE, TARDE, JUSTIFICADO
    }
}
