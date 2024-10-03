import React from "react";
import "../stylesheets/Cards.css";

function Cards({ name, status, species, image, origin, location, episodeslist,numeroepisodes }) {
return (
    <div className="contenedor-cards">
        <img className="imagen-card" src={image} alt={name} />
        <div className="contenedor-datos">
            <p className="name"><strong>Name:</strong> {name}</p>
            <p className="status"><strong>Status:</strong> {status}</p>
            <p className="species"><strong>Species:</strong> {species}</p>
            <p className="origin"><strong>Origin:</strong> {origin}</p>
            <p className="location"><strong>Location:</strong>{location}</p>
            <p className="episodes"><strong>Episodes:</strong>{numeroepisodes}</p>
            {/* <href>
            {episodeslist.map((episodeslist, index) => (
                <li key={index}>{episodeslist}</li>
            ))}
            </href> */}
        </div>
    </div>
    );
}

export default Cards;