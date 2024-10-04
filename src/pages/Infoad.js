import "../stylesheets/Infoad.css"; 
import Portal from '../componentes/Portal';
import Navbar from '../componentes/Navbar';
import { useLocation } from 'react-router-dom';
import Footer from "../componentes/Footer";
import Floatbutton from "../componentes/FloatButton";

function Infoad() {
  const location = useLocation();
  const { name, image, episodeList } = location.state || {}; // Asegúrate de usar el nombre 'episodeList'

  // Función para extraer el número de episodio de la URL
  const getEpisodeNumber = (episodeUrl) => {
    return parseInt(episodeUrl.split("/").pop(), 10);
  };

  // Ordenar la lista de episodios por número de episodio
  const sortedEpisodeList = episodeList
    ? [...episodeList].sort((a, b) => getEpisodeNumber(a) - getEpisodeNumber(b))
    : [];

  return (
    <>
      <Portal />
      <div className="overlay">
        <Navbar />
        <div className="infoad-container">
          <h1 className="nombre-personaje">{name}</h1>
          <img className="imagen-info" src={image} alt={name} />
          
          <div className="listas">
            <h2 className="titulo-episodes">Episodes:</h2>
            <ul className="lista">
              {sortedEpisodeList && sortedEpisodeList.length > 0 ? (
                sortedEpisodeList.map((episodeUrl, index) => {
                  const episodeNumber = getEpisodeNumber(episodeUrl);
                  return (
                    <li key={index}>
                      <a className="link" href={episodeUrl} target="_blank" rel="noopener noreferrer">
                        {`Episode ${episodeNumber}`}
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
        <Footer/>
        <Floatbutton/>
      </div>
    </>
  );
}

export default Infoad;
