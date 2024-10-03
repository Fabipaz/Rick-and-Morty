import React from "react";
import "../stylesheets/Navbar.css"
function Navbar (){
    return(
        <div className="contenedor-navbar">
            <img
            className="imagen-navbar"
            src={require("../imagenes/r1.jpg")}
            alt="foto de em"/>

            <header className="titulo-navbar">Rick and Morty API</header>
            

            <img
            className="imagen-navbar2"
            src={require("../imagenes/r2.jpg")}
            alt="foto de em"/>
        </div>
    )
}
export default Navbar