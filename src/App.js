import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./pages/CheckoutPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./Providers/AuthProvider";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
