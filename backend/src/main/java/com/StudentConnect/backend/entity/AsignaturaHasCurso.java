package com.StudentConnect.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class AsignaturaHasCurso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "idAsignatura", nullable = false)
    private Asignatura asignatura;

    @ManyToOne
    @JoinColumn(name = "idCurso", nullable = false)
    private Curso curso;
}
