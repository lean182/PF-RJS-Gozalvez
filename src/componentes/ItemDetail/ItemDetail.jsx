import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const { añadirProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoNuevo = { ...producto, cantidad: contador };
    añadirProducto(productoNuevo);
    setToggle(true);
  };

  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        {toggle ? (
          <>
            <Link className="button-terminar" to="/carrito">
              Ir al carrito
            </Link>
            <Link className="button-terminar" to="/">
              Seguir comprando
            </Link>
          </>
        ) : (
          <ItemCount
            stock={producto.stock}
            agregarAlCarrito={agregarAlCarrito}
          />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
