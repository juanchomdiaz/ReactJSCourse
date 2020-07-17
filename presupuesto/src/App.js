import React, { useState } from "react";
import "./App.css";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import ListadoGastos from "./components/ListadoGastos";
import ControlPresupueto from "./components/ControlPresupuesto";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [verPregunta, setVerPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  
  const addNewGasto = gasto => {
    setGastos([...gastos, gasto]);

    setRestante(restante-gasto.cantidad);
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>

        <div className="contenido-principal contenido">
          {verPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setVerPregunta={setVerPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  addNewGasto={addNewGasto}
                />
              </div>

              <div className="one-half column">

                <ListadoGastos 
                  gastos={gastos}
                />

                <ControlPresupueto 
                    presupuesto={presupuesto}
                    restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
