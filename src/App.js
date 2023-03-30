import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
        <CartProvider>
          <ToastContainer/>
    <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
