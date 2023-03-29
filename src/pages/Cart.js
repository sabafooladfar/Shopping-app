import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";
import "./Cart.css";

const Cart = () => {
  const { cart } = useCart();

  if (!cart.length)
    return (
      <Layout>
        <p>shopping cart is empty</p>
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
                  <div>
                    <button>remove</button>
                    <button>{item.quantity}</button>
                    <button>add</button>
                  </div>
                </div>
              );
            })}
            
          </div>
          <section className="cartSummary">cart summary</section>
        </section>
      </main>
    </Layout>
  );
};

export default Cart;
