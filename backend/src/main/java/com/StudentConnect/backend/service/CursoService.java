package com.example.backend.service;

import com.example.backend.entity.Curso;
import com.example.backend.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CursoService {

    @Autowired
    private CursoRepository cursoRepository;

    // Obtener todos los cursos
    public List<Curso> getAllCursos() {
        return cursoRepository.findAll();
    }

    // Obtener un curso por su ID
    public Optional<Curso> getCursoById(Integer id) {
        return cursoRepository.findById(id);
    }

    // Crear un nuevo curso
    public Curso createCurso(Curso curso) {
        return cursoRepository.save(curso);
    }

    // Actualizar un curso
    public Curso updateCurso(Integer id, Curso cursoDetails) {
        Curso curso = cursoRepository.findById(id).orElseThrow(() -> new RuntimeException("Curso no encontrado"));
        curso.setNombreCurso(cursoDetails.getNombreCurso());
        curso.setNivel(cursoDetails.getNivel());
        return cursoRepository.save(curso);
    }

    // Eliminar un curso
    public void deleteCurso(Integer id) {
        Curso curso = cursoRepository.findById(id).orElseThrow(() -> new RuntimeException("Curso no encontrado"));
        cursoRepository.delete(curso);
    }
}
