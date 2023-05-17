import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import cartReducer from "../Reducers/CartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || initialState;
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || initialState;
    dispatch(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
