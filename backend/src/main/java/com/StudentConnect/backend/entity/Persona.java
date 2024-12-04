package com.StudentConnect.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPersona;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false, length = 100)
    private String apellido;

    @Column(length = 150)
    private String email;

    @Column(length = 15)
    private String telefono;

    @ManyToOne
    @JoinColumn(name = "idRol", nullable = false)
    private Rol rol;
    
    
 }
