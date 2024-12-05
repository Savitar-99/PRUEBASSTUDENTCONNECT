package com.StudentConnect.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.StudentConnect.backend.entity.Asignatura;

public interface AsignaturaRepository extends JpaRepository<Asignatura, Integer> {
}