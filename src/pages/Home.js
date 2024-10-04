import Navbar from '../componentes/Navbar';
import Cards from '../componentes/Cards';
import { useEffect, useState } from 'react';
import Portal from '../componentes/Portal';
import Footer from '../componentes/Footer';
import Menu from '../componentes/Menu';

function Home() {
  const [datosapi, setDatosApi] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setDatosApi(data.results);
      setLoading(false);
    } catch (error) {
      console.log("ERROR: " + error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p className="loading">Cargando....</p>;
  }

  return (
    <div className="App">
      <Menu />
      <Portal />
      <Portal />
      <Portal />
      <Portal />
      <div className="overlay">
        <Navbar />
        <div className="contenedor-principal">
          {datosapi.map((personaje) => (
            <Cards
              key={personaje.id}
              name={personaje.name}
              status={personaje.status}
              species={personaje.species}
              image={personaje.image}
              origin={personaje.origin?.name || 'Desconocido'}
              location={personaje.location?.name || 'Desconocido'}
              numeroepisodes={personaje.episode?.length || 0} 
              episodeList={personaje.episode || []}
            />
          ))}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
