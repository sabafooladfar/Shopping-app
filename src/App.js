import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  );
}

export default App;
