import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';


function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const { ciudad, pais } = busqueda;

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [reqError, setReqError] = useState(false);


  useEffect(() => {
    const consultarAPI = async () => {

      if (consultar) {
        const api_key = 'b97e241089293d7ce1d8d4c509d978ec';

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${api_key}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado);

        setConsultar(false);

        setReqError(resultado.cod === "404");

      }
    }

    consultarAPI();
  }, [consultar, ciudad, pais]);


  return (
    <Fragment>
      <Header
        titulo="Clima React v1.0"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">
              {!reqError ? 
              <Clima
                resultado={resultado}
              /> 
              : <Error 
              mensaje="No hay resultados" 
              />}

            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
