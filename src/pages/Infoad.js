import "../stylesheets/Infoad.css"; 
import Portal from '../componentes/Portal';
import Navbar from '../componentes/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from "../componentes/Footer";
import FloatButton from "../componentes/FloatButton";

function Infoad() {
  const location = useLocation();
  const { name, image, episodeList } = location.state || {};

  // Imprime cuántos episodios recibiste y la lista completa para verificación
  console.log(`Total de episodios recibidos: ${episodeList.length}`);
  console.log('Lista completa de episodios recibidos:', episodeList);

  return (
    <>
      <Portal />
      <div className="overlay">
        <Navbar />
        <div className="infoad-container">
          <h1 className="nombre-personaje">{name}</h1>
          <img className="imagen-info" src={image} alt={name} />
          <h2 className="titulo-episodes">Episodios:</h2>
          <div className="listas">
            <ul className="lista">
              {episodeList && episodeList.length > 0 ? (
                episodeList.map((episode, index) => {
                  const episodeNumber = episode.split('/').pop(); // Extraemos el número del episodio de la URL
                  return (
                    <li key={index}>
                      <a className="link" href={episode} target="_blank" rel="noopener noreferrer">
                        {`Episodio ${episodeNumber}`}  {/* Usamos el número real del episodio */}
                      </a>
                    </li>
                  );
                })
              ) : (
                <p>No hay episodios disponibles.</p>
              )}
            </ul>
          </div>
        </div>
      </div>  
      
      <Footer/>
      <FloatButton/>
      
    </>
  );
}

export default Infoad;
