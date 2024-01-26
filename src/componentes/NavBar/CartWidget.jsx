import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./NavBar.css"

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CartContext);

  return (
    <Link to="/carrito" id="Carrito">
      {carrito.length !== 0 && <p className="textocart">{totalCantidad()}</p>}
      <img className="CartWidget" src="/img/CartWidget.svg" alt="icono de carrito"/>
    </Link>
  );
};

export default CartWidget;

