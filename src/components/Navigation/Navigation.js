import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const {cart} = useCart();
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
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
