import React from "react";
import "../stylesheets/Footer.css"
function Footer (){
    return(
        <div className="contenedor-footer">
            <img
            className="imagen-footer"
            src={require("../imagenes/r4.jpg")}
            alt="foto de em"/>

            <header className="titulo-footer">by FabipazDev</header>
            

            <img
            className="imagen-footer2"
            src={require("../imagenes/r5.jpg")}
            alt="foto de em"/>
        </div>
    )
}
export default Footer