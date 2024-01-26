import { Link } from "react-router-dom";

import "./error.css";

const Error = () => {
  return (
    <div>
      <p className="Error404">404 not found</p>
      <Link className="button" to="/">
        Volver al inicio
      </Link>
    </div>
  );
};
export default Error;
