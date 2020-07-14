import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, removeCita}) => (

    <Fragment>
        <div className="cita">
            <p>Macota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>

            <button
                className="button u-full-width"
                onClick={() => removeCita(cita.id)}
            >Eliminar &times;</button>
        </div>       
    </Fragment>
    
);

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    removeCita: PropTypes.func.isRequired
}
 
export default Cita;