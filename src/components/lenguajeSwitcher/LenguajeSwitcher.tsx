import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa"; // Icono de idioma (asegúrate de tener instalado react-icons)

interface LanguageSwitcherProps {
    onLanguageChange: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

    const handleToggle = () => {
        setIsOpen(!isOpen); // Cambia el estado cuando se hace clic en el icono
    };

    const handleLanguageChange = (language: string) => {
        onLanguageChange(language); // Llama la función para cambiar el idioma
        setIsOpen(false); // Cierra el menú después de seleccionar un idioma
    };

    return (
        <div className="fixed top-8 right-0 z-50">
            {/* Botón para abrir/cerrar */}
            <div
                className="bg-white p-3 rounded-l-full shadow-lg cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300"
                onClick={handleToggle}
            >
                <FaLanguage size={30} color="#F26F63" />
            </div>

            {/* Panel de idiomas */}
            <div
                className={`absolute right-0 bg-white border border-red-500 rounded-l-lg shadow-md p-4 mt-2 w-40 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300`}
            >
                <ul className="space-y-2">
                    <li
                        className="cursor-pointer hover:bg-red-500 hover:text-white px-2 py-1 rounded"
                        onClick={() => handleLanguageChange("es")}
                    >
                        Español
                    </li>
                    <li
                        className="cursor-pointer hover:bg-red-500 hover:text-white px-2 py-1 rounded"
                        onClick={() => handleLanguageChange("ca")}
                    >
                        Català
                    </li>
                    <li
                        className="cursor-pointer hover:bg-red-500 hover:text-white px-2 py-1 rounded"
                        onClick={() => handleLanguageChange("en")}
                    >
                        English
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default LanguageSwitcher;