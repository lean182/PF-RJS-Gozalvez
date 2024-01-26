import { createContext, useState } from "react";

//Context de React llamado CartContex
const CartContext = createContext();

// Componente llamado CartProvider que servira como proveedor del contexto
const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const añadirProducto = (producto) => {
    const condicion = estaEnElCarrito(producto.id);
    if (condicion) {
      //logica para sumar la cantidad si el producto ya estaba agregado
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === producto.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + producto.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(productosModificados);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnElCarrito = (idProducto) => {
    return carrito.some((producto) => producto.id === idProducto);
  };

  const totalCantidad = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };

  const totalPrecio = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (producto) => producto.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };

  const borrarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        añadirProducto,
        totalCantidad,
        totalPrecio,
        borrarProducto,
        borrarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
