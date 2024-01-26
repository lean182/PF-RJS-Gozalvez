import { useState } from "react";

import { Link } from "react-router-dom";

import "./Item.css";

const Item = ({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const estiloCard = {
    transform: zoom ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      style={estiloCard}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className="item"
    >
      <img className="image" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo"> {producto.nombre} </p>
      <p className="precio">$ {producto.precio} </p>
      <Link to={`/detalle/${producto.id}`} className="link">
        Ver detalles
      </Link>
    </div>
  );
};
export default Item;
