import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/", // URL del backend Spring Boot
});

// Interceptor para añadir el token JWT a las solicitudes
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Almacena el token en localStorage
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
