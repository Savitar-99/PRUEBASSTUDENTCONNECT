import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definimos las traducciones
const resources = {
    ca: {
        translation: {
            welcome: "Benvingut a ",
            login: "Inicia sessió",
            likelogin: "Inici de sessió",
            logout: "Tanca sessió",
            dashboard: "Panell de control",
            email: "Correu electrònic",
            password: "Contrasenya",
            noAccount: "No tens un compte?",
            register: "Registra't com a estudiant",
            forgotPassword: "No recordes la teva contrasenya?",
            changePassword: "Canviar la contrasenya",
            footerCopyright: "Tots els drets reservats.",
            footerTerms: "Termes i condicions",
            footerPrivacy: "Política de privacitat",
            footerAbout: "Qui som",
            verificationCodeSent: "Codi de verificació enviat a {{email}} (Simulat: {{code}})",
            emailNotFound: "Correu electrònic no trobat.",
            incorrectCode: "Codi incorrecte. Si us plau, intenta-ho de nou.",
            passwordMismatch: "Les contrasenyes no coincideixen.",
            passwordTooShort: "La contrasenya ha de tenir almenys 6 caràcters.",
            passwordUpdated: "Contrassenya actualitzada amb èxit!",
            passwordChangeSuccess: "Contrassenya canviada amb èxit!",
            returnToLogin: "Torna a iniciar sessió",
            recoverYourAccount: "Recupera el teu compte de",
            sendVerificationCode: "Envia el codigo de verificación",
            backToLogin: "Tornar a l'inici de sessió",
            verifyCode: "Codi de verificació",
            newPassword: "Contrasenya nova",
            confirmPassword: "Confirmar contrasenya",
            passwordChanged: "Contrasenya canviada correctament",
            verificationCodeSent: "Codi de verificació enviat",
            codeVerified: "Codi Verificat",
            passwordsDoNotMatch: "Les contrasenyes no coincideixen",
            verificationCode: "Codi de verificació",
            first_name: "Nom",
            last_name: "Cognom",
            phone_number: "Nnúmero de telèfon",
            student_registration: "Registre de l'estudiant",
            create_account: "Crea el teu compte a",
            registration_success: "Registre exitós",
            password_validation: "La contrasenya necessita més de 6 caràcters",
            welcomeTeacher: "Benvingut al teu perfil, ",
            Cerrar_Sesión: "Tanca la sessió",
            searchStudent: "Cerca un alumne",
            nuestraMision: "La nostra Missió",
            facilitamosSeguimiento: "Facilitem el seguiment acadèmic i l'assessorament professional, connectant estudiants i professors a una plataforma intuïtiva i eficient.",
            nuestraPropuesta: "La nostra Proposta",
            gestionAcademicaSimplificada: "Gestió acadèmica simplificada",
            asesoramientoPersonalizado: "Assessorament personalitzat",
            planificacionEducativaIntuitiva: "Planificació educativa intuïtiva",
            estudiantesColaborando: "Estudiants col·laborant",
            construyendoFuturoEducacion: "Construint el futur de l'educació, un estudiant alhora",
            iniciarSesion: "Iniciar Sessió",
            registrarse: "Registrar-se",
            todosDerechosReservados: "Tots els drets reservats.",
            liketeacher: " com a professor",
            likestudent: " com a estudiant",
            espanol: "Catellà",
            catalan: "Català",
            english: "Anglés",
            title: "Orientació Acadèmica",
            newPost: "Nou Post",
            newPostPlaceholder: "Escriu el teu nou post...",
            cancel: "Cancel·la",
            publish: "Publicar",
            save: "Desa",
            addComment: "Afegeix un comentari...",
            present: "Present",
            absent: "Absent",
            justified: "Justificat",
            performanceBySubject: "Rendiment de l'alumne",
            progressLevel: "Nivell de progrés",
        },
    },
    en: {
        translation: {
            welcome: "Welcome to ",
            login: "Log in",
            likelogin: "Log in as",
            logout: "Log out",
            dashboard: "Dashboard",
            email: "Email",
            password: "Password",
            noAccount: "Don't have an account?",
            register: "Register as a student",
            forgotPassword: "Forgot your password?",
            changePassword: "Change password",
            footerCopyright: "All rights reserved.",
            footerTerms: "Terms and Conditions",
            footerPrivacy: "Privacy Policy",
            footerAbout: "About us",
            verificationCodeSent: "Verification code sent to {{email}} (Simulated: {{code}})",
            emailNotFound: "Email not found.",
            incorrectCode: "Incorrect code. Please try again.",
            passwordMismatch: "Passwords do not match.",
            passwordTooShort: "Password must be at least 6 characters.",
            passwordUpdated: "Password updated successfully!",
            passwordChangeSuccess: "Password changed successfully!",
            returnToLogin: "Return to login",
            recoverYourAccount: "Recover your account from",
            sendVerificationCode: "Send verification code",
            backToLogin: "Return to login",
            verifyCode: "Enter the verification code",
            verificationCode: "Verification code",
            newPassword: "New password",
            confirmPassword: "Confirm Password",
            passwordChanged: "Password changed successfully",
            verificationCodeSent: "Verification code sent",
            codeVerified: "Verified code",
            passwordsDoNotMatch: "Passwords do not match",
            first_name: "Name",
            last_name: "Last name",
            phone_number: "Phone number",
            student_registration: "Student registration",
            create_account: "Create your account at",
            registration_success: "Registration successful",
            password_validation: "The password needs to be more than 6 characters",
            welcomeTeacher: "Welcome to your profile, ",
            Cerrar_Sesión: "Log out",
            searchStudent: "Search for a student",
            nuestraMision: "Our Mission",
            facilitamosSeguimiento: "We facilitate academic monitoring and professional advice, connecting students and teachers on an intuitive and efficient platform.",
            nuestraPropuesta: "Our proposal",
            gestionAcademicaSimplificada: "Simplified academic management",
            asesoramientoPersonalizado: "Personalized advice",
            planificacionEducativaIntuitiva: "Intuitive educational planning",
            estudiantesColaborando: "Students collaborating",
            construyendoFuturoEducacion: "Building the future of education, one student at a time",
            iniciarSesion: "Login",
            registrarse: "Register",
            todosDerechosReservados: "All rights reserved.",
            liketeacher: " a teacher",
            likestudent: " a student",
            espanol: "Spanish",
            catalan: "Catalan",
            english: "English",
            title: "Orientación Académica",
            newPost: "New post",
            newPostPlaceholder: "Escribe tu nuevo post...",
            cancel: "Cancelar",
            publish: "Publicar",
            save: "Save",
            addComment: "Add a comment...",
            present: "Present",
            absent: "Absent",
            justified: "Justified",
            performanceBySubject: "Student performance",
            progressLevel: "Progress level",
            title: "Academic Guidance",

        },
    },
    es: {
        translation: {
            welcome: "Bienvenido a ",
            login: "Iniciar sesión",
            likelogin: "Incio de sesion",
            logout: "Cerrar sesión",
            dashboard: "Panel de control",
            email: "Correo Electrónico",
            password: "Contraseña",
            noAccount: "¿No tienes una cuenta?",
            register: "Regístrate como estudiante",
            forgotPassword: "¿No recuerdas tu contraseña?",
            changePassword: "Cambiar la contraseña",
            footerCopyright: "Todos los derechos reservados.",
            footerTerms: "Términos y Condiciones",
            footerPrivacy: "Política de Privacidad",
            footerAbout: "Quiénes Somos",
            verificationCodeSent: "Código de verificación enviado a {{email}} (Simulado: {{code}})",
            emailNotFound: "Correo electrónico no encontrado.",
            incorrectCode: "Código incorrecto. Por favor, inténtelo de nuevo.",
            passwordMismatch: "Las contrasenyes no coinciden.",
            passwordTooShort: "La contraseña debe tener al menos 6 caracteres.",
            passwordUpdated: "¡Contraseña actualizada con éxito!",
            passwordChangeSuccess: "¡Contraseña cambiada con éxito!",
            returnToLogin: "Volver al inicio de sesión",
            recoverYourAccount: "Recupera tu cuenta de",
            sendVerificationCode: "Envia el codigo de verificación",
            backToLogin: "Volver al inicio de sesión",
            verifyCode: "Código de verificación",
            newPassword: "Nueva contraseña",
            confirmPassword: "Confirmar contraseña",
            passwordChanged: "Contraseña cambiada correctamente",
            verificationCodeSent: "Código de verificación enviado",
            codeVerified: "Codigo veriificado",
            passwordsDoNotMatch: "Las contraseñas no coinciden",
            verificationCode: "Codigo de verificación",
            first_name: "Nombre",
            last_name: "Apellidos",
            phone_number: "Número de teléfono",
            student_registration: "Registro del estudiante",
            create_account: "Crea tu cuenta en",
            registration_success: "Registro exitoso",
            password_validation: "La contraseña necesita más de 6 caracteres",
            welcomeTeacher: "Bienvenido a tu perfil, ",
            Cerrar_Sesión: "Cierra la sesión",
            searchStudent: "Busca un alumno",
            nuestraMision: "Nuestra Misión",
            facilitamosSeguimiento: "Facilitamos el seguimiento académico y el asesoramiento profesional, conectando estudiantes y profesores en una plataforma intuitiva y eficiente.",
            nuestraPropuesta: "Nuestra Propuesta",
            gestionAcademicaSimplificada: "Gestión académica simplificada",
            asesoramientoPersonalizado: "Asesoramiento personalizado",
            planificacionEducativaIntuitiva: "Planificación educativa intuitiva",
            estudiantesColaborando: "Estudiantes colaborando",
            construyendoFuturoEducacion: "Construyendo el futuro de la educación, un estudiante a la vez",
            iniciarSesion: "Iniciar Sesión",
            registrarse: "Registrarse",
            todosDerechosReservados: "Todos los derechos reservados.",
            liketeacher: " como profesor",
            likestudent: " como estudiante",
            espanol: "Español",
            catalan: "Catalán",
            english: "Inglés",
            title: "Orientación Académica",
            newPost: "Nuevo Post",
            newPostPlaceholder: "Escribe tu nuevo post...",
            cancel: "Cancelar",
            publish: "Publicar",
            save: "Guardar",
            addComment: "Añade un comentario...",
            present: "Presente",
            absent: "Ausente",
            justified: "Justificado",
            performanceBySubject: "Rendimiento del alumno",
            progressLevel: "Nivel de progreso",

        },
    },
};

// Función para obtener el idioma guardado o por defecto
const getSavedLanguage = () => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage ? savedLanguage : 'en'; // Idioma por defecto: inglés
};

// Inicializamos i18next
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getSavedLanguage(), // Usar el idioma guardado
        fallbackLng: 'en', // Idioma alternativo si el actual no tiene traducción
        interpolation: { escapeValue: false }, // React ya maneja el escape de valores
    });

// Función para cambiar el idioma y guardarlo en localStorage
const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Guardamos el idioma seleccionado
};

export { changeLanguage };
