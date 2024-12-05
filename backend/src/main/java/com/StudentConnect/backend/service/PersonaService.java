package com.StudentConnect.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentConnect.backend.entity.Persona;
import com.StudentConnect.backend.repository.PersonaRepository;

@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    // Obtener todas las personas
    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }

    // Obtener una persona por su ID
    public Optional<Persona> getPersonaById(Integer id) {
        return personaRepository.findById(id);
    }

    // Crear una nueva persona
    public Persona createPersona(Persona persona) {
        return personaRepository.save(persona);
    }

    // Actualizar una persona
    public Persona updatePersona(Integer id, Persona personaDetails) {
        Persona persona = personaRepository.findById(id).orElseThrow(() -> new RuntimeException("Persona no encontrada"));
        persona.setNombre(personaDetails.getNombre());
        persona.setApellido(personaDetails.getApellido());
        persona.setEmail(personaDetails.getEmail());
        persona.setTelefono(personaDetails.getTelefono());
        persona.setRol(personaDetails.getRol());
        return personaRepository.save(persona);
    }

    // Eliminar una persona
    public void deletePersona(Integer id) {
        Persona persona = personaRepository.findById(id).orElseThrow(() -> new RuntimeException("Persona no encontrada"));
        personaRepository.delete(persona);
    }
}
