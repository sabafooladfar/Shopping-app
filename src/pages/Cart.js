import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useAuth } from "../Providers/AuthProvider";
import { useCart, useCartActions } from "../Providers/CartProvider";
import "./Cart.css";

const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  

  const decHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const incHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  if (!cart.length)
    return (
      <Layout>
        <p style={{textAlign:"center",marginTop:"20px"}}>shopping cart is empty</p>
      </Layout>
    );

  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <div className="cartList">
            {cart.map((item) => {
              return (
                <div key={item.id} className="cartItem">
                  <div className="cartImg">
                    <img src={item.image} />
                  </div>
                  <p>{item.name}</p>
                  <p>{item.price * item.quantity} $</p>
                  <div className="cartItemBtns">
                    <button className="addBtn" onClick={() => incHandler(item)}>-</button>
                    <button>{item.quantity}</button>
                    <button className="decBtn" onClick={() => decHandler(item)}>+</button>
                  </div>
                </div>
              );
            })}
          </div>
          <CartSummary cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  );
};

export default Cart;

const CartSummary = ({ cart, total }) => {
  const userData = useAuth();
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummary">
      <h4>Cart Summary</h4>
      <div className="cartSummaryItem">
        <p>Original Price</p>
        <p>{originalTotalPrice} $</p>
      </div>
      <div className="cartSummaryItem disSummary">
        <p>Discount</p>
        <p>{originalTotalPrice - total} $</p>
      </div>
      <div className="cartSummaryItem">
        <p>Total Price</p>
        <p>{total} $</p>
      </div>
      <Link to="/login?redirect=/checkout">
        <button className="checkoutBtn">Checkout</button>
      </Link>
    </section>
  );
};
