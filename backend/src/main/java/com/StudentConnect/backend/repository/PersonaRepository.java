package com.StudentConnect.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.StudentConnect.backend.entity.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Integer> {
}
