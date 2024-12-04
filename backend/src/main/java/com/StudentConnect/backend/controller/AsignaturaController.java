package com.example.backend.controller;

import com.example.backend.entity.Asignatura;
import com.example.backend.service.AsignaturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/asignaturas")
public class AsignaturaController {

    @Autowired
    private AsignaturaService asignaturaService;

    // Obtener todas las asignaturas
    @GetMapping
    public List<Asignatura> getAllAsignaturas() {
        return asignaturaService.getAllAsignaturas();
    }

    // Obtener una asignatura por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Asignatura> getAsignaturaById(@PathVariable Integer id) {
        Optional<Asignatura> asignatura = asignaturaService.getAsignaturaById(id);
        return asignatura.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // Crear una nueva asignatura
    @PostMapping
    public ResponseEntity<Asignatura> createAsignatura(@RequestBody Asignatura asignatura) {
        Asignatura newAsignatura = asignaturaService.createAsignatura(asignatura);
        return ResponseEntity.status(HttpStatus.CREATED).body(newAsignatura);
    }

    // Actualizar una asignatura
    @PutMapping("/{id}")
    public ResponseEntity<Asignatura> updateAsignatura(@PathVariable Integer id, @RequestBody Asignatura asignaturaDetails) {
        Asignatura updatedAsignatura = asignaturaService.updateAsignatura(id, asignaturaDetails);
        return ResponseEntity.ok(updatedAsignatura);
    }

    // Eliminar una asignatura
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAsignatura(@PathVariable Integer id) {
        asignaturaService.deleteAsignatura(id);
        return ResponseEntity.noContent().build();
    }
}
