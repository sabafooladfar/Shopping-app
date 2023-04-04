import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const user = useAuth();
  return (
    <header className="navContainer">
      <nav className="nav">
        <ul>
          <h4 className="logo">App Logo</h4>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "activeLink" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="cartLink">
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
          <li>
            <NavLink
              to={user ? "/profile" : "/login"}
              className={(navData) => (navData.isActive ? "activeLink" : "")}
            >
              {user ? "Profile" : "Login"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
