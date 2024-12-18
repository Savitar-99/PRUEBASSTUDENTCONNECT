-- Eliminar base de datos si existe
DROP DATABASE IF EXISTS sistema_academico;

-- Crear base de datos
CREATE DATABASE IF NOT EXISTS sistema_academico;

-- Usar la base de datos
USE sistema_academico;

-- Crear tabla rol
CREATE TABLE rol (
    id_rol INT PRIMARY KEY NOT NULL,
    nombre_rol VARCHAR(50) NOT NULL
);

-- Insertar rol (asumir que el rol con id 5 ya existe)
INSERT INTO rol (id_rol, nombre_rol) 
VALUES (5, 'Profesor');
VALUES (3, 'Estudiante');

-- Crear tabla persona
CREATE TABLE persona (
    id_persona INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150),
    password VARCHAR(255),
    telefono VARCHAR(15),
    id_rol INT NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertar persona (vinculada al rol con id 5)
INSERT INTO persona (id_persona, nombre, apellido, email, password, telefono, id_rol) 
VALUES (1, 'Joel', 'Galan Pérez', 'joelgalanperez@gmail.com', 'a', '67817239', 5);

-- Crear tabla asignatura
CREATE TABLE asignatura (
    id_asignatura INT AUTO_INCREMENT PRIMARY KEY,
    nombre_asignatura VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Insertar asignatura
INSERT INTO asignatura (id_asignatura, nombre_asignatura, descripcion) 
VALUES (1, 'Matemáticas', 'Asignatura de matemáticas básica.');

-- Crear tabla curso
CREATE TABLE curso (
    id_curso INT AUTO_INCREMENT PRIMARY KEY,
    nombre_curso VARCHAR(100) NOT NULL,
    nivel VARCHAR(50)
);

-- Insertar curso
INSERT INTO curso (id_curso, nombre_curso, nivel) 
VALUES (1, 'Curso 101', 'Básico');

-- Crear tabla asignatura_has_curso
CREATE TABLE asignatura_has_curso (
    asignatura_id_asignatura INT NOT NULL,
    curso_id_curso INT NOT NULL,
    PRIMARY KEY (asignatura_id_asignatura, curso_id_curso),
    FOREIGN KEY (asignatura_id_asignatura) REFERENCES asignatura(id_asignatura) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (curso_id_curso) REFERENCES curso(id_curso) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Vincular asignatura con curso
INSERT INTO asignatura_has_curso (asignatura_id_asignatura, curso_id_curso) 
VALUES (1, 1);

-- Crear tabla asistencia
CREATE TABLE asistencia (
    id_asistencia INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    estado ENUM('Presente', 'Ausente', 'Tarde', 'Justificado') NOT NULL,
    id_asignatura INT NOT NULL,
    FOREIGN KEY (id_asignatura) REFERENCES asignatura(id_asignatura) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertar asistencia
INSERT INTO asistencia (id_asistencia, fecha, estado, id_asignatura) 
VALUES (1, '2024-12-17', 'Presente', 1);

-- Crear tabla persona_asignatura
CREATE TABLE persona_asignatura (
    id_persona INT NOT NULL,
    id_asignatura INT NOT NULL,
    asistencia_id_asistencia INT NOT NULL,
    PRIMARY KEY (id_persona, id_asignatura),
    FOREIGN KEY (id_persona) REFERENCES persona(id_persona) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (id_asignatura) REFERENCES asignatura(id_asignatura) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (asistencia_id_asistencia) REFERENCES asistencia(id_asistencia) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Vincular persona con asignatura y asistencia
INSERT INTO persona_asignatura (id_persona, id_asignatura, asistencia_id_asistencia) 
VALUES (1, 1, 1);
