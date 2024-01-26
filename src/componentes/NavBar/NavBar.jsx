import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="brand">
        <h1>Primer eCommerce</h1>
      </Link>
      <ul>
        <li>
          <Link to="/categorias/auriculares">Auriculares</Link>
        </li>
        <li>
          <Link to="/categorias/Teclados">Teclados</Link>
        </li>
        <li>
          <Link to="/categorias/Mouse">Mouse</Link>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
