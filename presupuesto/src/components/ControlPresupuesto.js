import React, {Fragment} from 'react';
import {getClassFor} from '../helper';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>

            <div className={getClassFor(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}

export default ControlPresupuesto;