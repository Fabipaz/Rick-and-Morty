import React from "react";
import "../stylesheets/Cards.css";
import { Link } from "react-router-dom";

function Cards({ name, status, species, image, origin, location, numeroepisodes, episodeList }) {
  return (
    <div className="contenedor-cards">
      <img className="imagen-card" src={image} alt={name} />
      <div className="contenedor-datos">
        <p className="name"><strong>Name:</strong> {name}</p>
        <p className="status"><strong>Status:</strong> {status}</p>
        <p className="species"><strong>Species:</strong> {species}</p>
        <p className="origin"><strong>Origin:</strong> {origin}</p>
        <p className="location"><strong>Location:</strong> {location}</p>
        <p className="episodes"><strong>Episodes:</strong> {numeroepisodes}</p>
        

        
        
        <Link 
          to="/Infoad" 
          state={{ name, image, episodeList }}
        >
          <button type="button" className="buton-videos">Ver</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
