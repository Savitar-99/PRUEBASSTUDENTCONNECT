package com.StudentConnect.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.StudentConnect.backend.entity.Rol;
import com.StudentConnect.backend.repository.RolRepository;

@Service
public class RolService {

    @Autowired
    private RolRepository rolRepository;

    // Obtener todos los roles
    public List<Rol> getAllRoles() {
        return rolRepository.findAll();
    }

    // Obtener un rol por su ID
    public Optional<Rol> getRolById(Integer id) {
        return rolRepository.findById(id);
    }

    // Crear un nuevo rol
    public Rol createRol(Rol rol) {
        return rolRepository.save(rol);
    }

    // Actualizar un rol
    public Rol updateRol(Integer id, Rol rolDetails) {
        Rol rol = rolRepository.findById(id).orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        rol.setNombreRol(rolDetails.getNombreRol());
        return rolRepository.save(rol);
    }

    // Eliminar un rol
    public void deleteRol(Integer id) {
        Rol rol = rolRepository.findById(id).orElseThrow(() -> new RuntimeException("Rol no encontrado"));
        rolRepository.delete(rol);
    }
}
