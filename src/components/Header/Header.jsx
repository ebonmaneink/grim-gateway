import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">Grim Gateway</Link>
      </h1>
    </header>
  );
}

export default Header;
