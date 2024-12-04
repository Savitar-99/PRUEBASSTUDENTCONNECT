package com.example.backend.service;

import com.example.backend.entity.Asignatura;
import com.example.backend.repository.AsignaturaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AsignaturaService {

    @Autowired
    private AsignaturaRepository asignaturaRepository;

    // Obtener todas las asignaturas
    public List<Asignatura> getAllAsignaturas() {
        return asignaturaRepository.findAll();
    }

    // Obtener una asignatura por su ID
    public Optional<Asignatura> getAsignaturaById(Integer id) {
        return asignaturaRepository.findById(id);
    }

    // Crear una nueva asignatura
    public Asignatura createAsignatura(Asignatura asignatura) {
        return asignaturaRepository.save(asignatura);
    }

    // Actualizar una asignatura
    public Asignatura updateAsignatura(Integer id, Asignatura asignaturaDetails) {
        Asignatura asignatura = asignaturaRepository.findById(id).orElseThrow(() -> new RuntimeException("Asignatura no encontrada"));
        asignatura.setNombreAsignatura(asignaturaDetails.getNombreAsignatura());
        asignatura.setDescripcion(asignaturaDetails.getDescripcion());
        return asignaturaRepository.save(asignatura);
    }

    // Eliminar una asignatura
    public void deleteAsignatura(Integer id) {
        Asignatura asignatura = asignaturaRepository.findById(id).orElseThrow(() -> new RuntimeException("Asignatura no encontrada"));
        asignaturaRepository.delete(asignatura);
    }
}
