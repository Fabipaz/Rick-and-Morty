import React from 'react';
import '../stylesheets/FloatButton.css'; // Importa el archivo CSS
import { House } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatButton = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

    const accionBoton = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    return (
        <button className="floating-button" onClick={accionBoton}>
            <House color='black' size={48} />
        </button>
    );
};

export default FloatButton;
