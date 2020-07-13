import React from "react";

const Producto = ({ producto, carrito, setCarrito, isCarrito }) => {
  const { nombre, precio } = producto;

  const comprarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (producto) => {
    const productos = carrito.filter((p) => p.id !== producto.id);
    setCarrito(productos);
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>

      {isCarrito ? (
        <button type="button" onClick={() => eliminarProducto(producto)}>
          Eliminar
        </button>
      ) : (
        <button type="button" onClick={() => comprarProducto(producto)}>
          Comprar
        </button>
      )}
    </div>
  );
};

export default Producto;
