import { Link } from "react-router-dom";

import "./Error.css";

const Error = () => {
  return (
    <div className="errorYboton">
      <p className="error404">404 not found</p>
      <Link className="boton" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};
export default Error;
