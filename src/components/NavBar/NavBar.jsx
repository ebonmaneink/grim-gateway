import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar__item">
          <Link to="/sources">Sources</Link>
        </li>
        <li className="navbar__item">About</li>
        <li className="navbar__item">Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
