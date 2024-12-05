package com.StudentConnect.backend.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.StudentConnect.backend.entity.Curso;
import com.StudentConnect.backend.service.CursoService;

@RestController
@RequestMapping("/api/cursos")
public class CursoController {

	@Autowired
	private CursoService cursoService;

	// Obtener todos los cursos
	@GetMapping
	public List<Curso> getAllCursos() {
		return cursoService.getAllCursos();
	}

	// Obtener un curso por su ID
	@GetMapping("/{id}")
	public ResponseEntity<Curso> getCursoById(@PathVariable Integer id) {
		Optional<Curso> curso = cursoService.getCursoById(id);
		return curso.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
	}

	// Crear un nuevo curso
	@PostMapping
	public ResponseEntity<Curso> createCurso(@RequestBody Curso curso) {
		Curso newCurso = cursoService.createCurso(curso);
		return ResponseEntity.status(HttpStatus.CREATED).body(newCurso);
	}

	// Actualizar un curso
	@PutMapping("/{id}")
	public ResponseEntity<Curso> updateCurso(@PathVariable Integer id, @RequestBody Curso cursoDetails) {
		Curso updatedCurso = cursoService.updateCurso(id, cursoDetails);
		return ResponseEntity.ok(updatedCurso);
	}

	// Eliminar un curso
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCurso(@PathVariable Integer id) {
		cursoService.deleteCurso(id);
		return ResponseEntity.noContent().build();
	}
}
