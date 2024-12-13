# StudentConnect

StudentConnect es una plataforma intuitiva y eficiente que facilita el seguimiento académico y el asesoramiento profesional, conectando estudiantes y profesores.

## Características

- **Inicio de Sesión**: Permite a los usuarios iniciar sesión como estudiantes o profesores.
- **Registro de Estudiantes**: Los nuevos estudiantes pueden registrarse en la plataforma.
- **Recuperación de Contraseña**: Funcionalidad para recuperar la contraseña en caso de olvido.
- **Dashboard de Estudiantes**: Panel de control personalizado para estudiantes.
- **Dashboard de Profesores**: Panel de control personalizado para profesores.
- **Página de Nosotros**: Información sobre la misión y propuesta de StudentConnect.

## Estructura del Proyecto
Workspace
Recopilando información del área de trabajo

Claro, aquí tienes un ejemplo de un archivo README.md para tu aplicación:

.vscode/ PRUEBASSTUDENTCONNECT/ 
├── backend/ 
│ ├── src/ 
│ │ ├── main/ 
│ │ │ ├── java/ 
│ │ │ │ └── com/StudentConnect/backend/ 
│ │ │ │ ├── controllers/ 
│ │ │ │ ├── entity/ 
│ │ │ │ ├── repository/ 
│ │ │ │ └── service/ 
│ │ │ └── resources/ 
│ │ │ └── application.properties 
│ ├── .gitignore 
│ ├── mvnw 
│ ├── mvnw.cmd 
│ └── pom.xml 
├── src/ 
│ ├── components/ 
│ │ ├── auth/ 
│ │ │ ├── LoginForm.tsx 
│ │ │ ├── PasswordRecovery.tsx 
│ │ │ └── RegisterStudent.tsx 
│ │ ├── dashboard/ 
│ │ │ ├── StudentDashboard.tsx 
│ │ │ └── ProfessorDashboard.tsx 
│ │ └── QuienesSomos/ 
│ │ ├── Hero.tsx 
│ │ ├── MainContent.tsx 
│ │ └── Footer.tsx 
│ ├── App.tsx 
│ ├── main.tsx 
│ └── index.css 
├── index.html 
├── package.json 
└── vite.config.ts


## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/StudentConnect.git

2. Navega al directorio del proyecto:

   cd PRUEBASSTUDENTCONNECT

3. Instala las dependencias del frontend:

    npm install

4. Navega al directorio del backend e instala las dependencias de Maven:

    cd backend
    ./mvnw install

Uso
    1. Inicia el servidor backend:

        ./mvnw spring-boot:run

    2. Inicia el servidor frontend:

        cd ..
        npm run dev

    3. Abre tu navegador y navega a

        http://localhost:3000.

Contribución
1. Haz un fork del proyecto.
   
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
   
3. Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
   
4. Sube tus cambios (git push origin feature/nueva-funcionalidad).
   
5. Abre un Pull Request.




Licencia

Este proyecto está licenciado bajo la Licencia Apache 2.0. Consulta el archivo LICENSE para más detalles.


Este `README.md` proporciona una visión general de la aplicación, su estructura, instrucciones de instalación y uso, y cómo contribuir al proyecto. Ajusta los detalles según sea necesario para tu proyecto específico.
