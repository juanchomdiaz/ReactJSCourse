import React, {Fragment} from 'react';
import Cita from './Cita'
import PropTypes from 'prop-types';

const Citas = ({citas, setCitas}) => {

    const removeCita = id => {
        let filteredCitas = citas.filter(cita => (id !== cita.id));

        setCitas(filteredCitas);
    };

    return ( 
        <Fragment>
            {citas.length===0 ? <h2>No hay citas aún.</h2> : <h2>Administra tus citas</h2> }

            {citas.map(cita => (
                <Cita
                    key={cita.id}
                    cita={cita}
                    removeCita={removeCita}
                />
            ))};
        </Fragment>
    );
}
 
Citas.propTypes = {
    citas: PropTypes.array.isRequired,
    setCitas: PropTypes.func.isRequired
}

export default Citas;