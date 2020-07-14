import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

function App() {

  //Read local storage
  let citasInLS = JSON.parse(localStorage.getItem('citas'));
  if(!citasInLS) {
    citasInLS = [];
  }

  //Create state for citas
  const [citas, setCitas] = useState(citasInLS);

  //Function to add new cita to citas
  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  };

  useEffect( () => {
    if(citas) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className="container">
         <div className="one-half column">
            <Formulario 
              createCita={createCita}
            />
         </div>
         <div className="one-half column">
            <Citas 
              citas={citas}
              setCitas={setCitas}
            />            
         </div>
      </div>
    
    </Fragment>


  );
}

export default App;
