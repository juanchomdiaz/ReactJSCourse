import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({setPresupuesto, setRestante, setVerPregunta}) => {
    
    const [respuesta, setRespuesta] = useState(0);
    const [error, setError] = useState(false);

    const handleChange = ev => {
        setRespuesta( parseInt(ev.target.value,10) );
    };

    const handleSubmit = ev => {
        ev.preventDefault();

        if(respuesta < 1 || isNaN(respuesta)){
            setError(true);
            return;
        }

        setError(false);

        setPresupuesto(respuesta);
        setRestante(respuesta);
        setVerPregunta(false);
    };

    return (
        <Fragment>
                <h2>Ingresa tu presupuesto</h2>

                { error ? <Error message="Presupuesto no válido" /> : null}
                

                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        type="number"
                        className="u-full-width"
                        placeholder="Ingresa tu presupuesto"
                        onChange={handleChange}
                    />

                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Establecer presupuesto"
                    />
                </form>
        </Fragment>
    )
};

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setVerPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;