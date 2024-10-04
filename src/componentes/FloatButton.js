
import React from 'react';
import '../stylesheets/FloatButton.css'; // Importa el archivo CSS

const Floatbutton = () => {
    const handleClick = () => {
        // Acción que deseas realizar al hacer clic en el botón
        alert('Botón flotante clickeado!');
    };

    return (
        <button className="floating-button" onClick={handleClick}>
            +
        </button>
    );
};

export default Floatbutton;
