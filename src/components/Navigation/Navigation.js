import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="navContainer">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeLink" : "")}
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
