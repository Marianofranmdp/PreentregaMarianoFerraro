import CartWidget from "../Cartwidget/Cartwidget"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="nav-menu">
        <h2>
          <li>
            <Link to="/">EcoHouse</Link>
          </li>
        </h2>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Celulares">
            Celulares
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Tablets">
            Tablets
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Notebooks">
            Notebooks
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category/Televisores">
            Televisores
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/facebook.com/mipage">
            Seguinos...
          </Link>
        </li>
        <CartWidget/>
        
      </ul>
    </nav>
  );
}