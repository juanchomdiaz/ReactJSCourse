import React, { useState } from "react";
import Error from "./Error";
import uuid from "react-uuid";
import PropTypes from 'prop-types';

const Formulario = ({ addNewGasto }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    cantidad: 0,
  });

  const [error, setError] = useState(false);

  const handleChange = (ev) => {
    setFormulario({ ...formulario, [ev.target.name]: ev.target.value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    console.log(formulario);

    let { nombre, cantidad } = formulario;

    if (
      nombre.trim() !== "" &&
      parseInt(cantidad) < 1 &&
      isNaN(parseInt(cantidad))
    ) {
      setError(true);
      return;
    }

    setError(false);

    formulario.id = uuid();

    addNewGasto(formulario);

    setFormulario({ nombre: "", cantidad: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gatos aquí</h2>

      {error ? (
        <Error message="Los datos ingresados no son correctos." />
      ) : null}

      <div className="campo">
        <label>Nombre del gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Comida"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />
      </div>

      <div className="campo">
        <label>Cantidad del gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          name="cantidad"
          value={formulario.cantidad}
          onChange={handleChange}
        />
      </div>

      <button
        type="Submit"
        className="button-primary u-full-width"
       >Añadir gasto</button>
    </form>
  );
};

Formulario.propTypes = {
    addNewGasto: PropTypes.func.isRequired
}

export default Formulario;
