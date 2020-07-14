import React, {Fragment, useState} from 'react';
import uuid from 'react-uuid';

const Formulario = ({createCita}) => {

    //Create state for cita
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Create state for form validation
    const [formError, setFormError] = useState(false);

    //Handle form changes, receives and event
    const handleChange = ev => {
        setCita({
            ...cita,
            [ev.target.name]: ev.target.value
        })
    };

    //sends form
    const handleSubmit = ev => {
        ev.preventDefault();

        //Validate
        if(mascota.trim() ==='' || 
           propietario.trim() === '' ||
           fecha.trim() === '' ||
           hora.trim() === '' ||
           sintomas.trim() === '' ){
               setFormError(true);
               return;
        } else {
            setFormError(false);
        }

        //Set key
        cita.id = uuid();

        //Create cita
        createCita(cita);

        //Reset form
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        });

    };

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {formError ? <p className="alerta-error">Todos los campos son requeridos</p> : null}
            <form
                onSubmit={handleSubmit}
            >
                <label>Nombre de Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Ingresa nombre de tu mascota"
                    onChange={handleChange}
                    value={mascota}
                />

                <label>Nombre del dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Ingresa nombre del dueño"
                    onChange={handleChange}
                    value={propietario}
                />

                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />

                <label>Síntomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                />

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;