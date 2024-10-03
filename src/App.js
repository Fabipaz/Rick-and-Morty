import './App.css';
import Navbar from './componentes/Navbar';
import Cards from './componentes/Cards';
import { useEffect, useState } from 'react';
import Portal from './componentes/Portal';
import Footer from './componentes/Footer';

function App() {
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
    <Portal/>
    <Portal/>
    <Portal/>
    <Portal/>
    <Portal/>
    <div className='overlay'>
    <Navbar />
      <div className="contenedor-principal">
          {datosapi.map((datosapi) => (
            <Cards
              key={datosapi.id}
              name={datosapi.name}
              status={datosapi.status}
              species={datosapi.species}
              image={datosapi.image}
              origin={datosapi.origin?.name || 'Desconocido'}
              location={datosapi.location?.name || 'Desconocido'}
              numeroepisodes={datosapi.episode?.length || 0} 
              //episodeslist={datosapi.episode || []}
            />
          ))}
          <Footer/>
        </div>
        </div>
    </div>
  );
}

export default App;
