import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
import "./checkout.css";

const Checkout = () => {
  const { cart, total } = useCart();
  const user = useAuth();
  return (
    <main className="checkoutContainer">
      <section className="userDetail">
        <h3>Checkout Details</h3>
        <div>
          <p>Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Phone number : {user.phoneNumber}</p>
        </div>
      </section>
      <section className="productsDetail">
        <h3>Products Details</h3>
        {cart &&
          cart.map((c) => {
            return (
              <div key={c.id}>
                <p>Product name : {c.name}</p>
                <p>Quantity : {c.quantity}</p>
                <p>Price : {c.quantity * c.offPrice}</p>
              </div>
            );
          })}
        <hr />
        <p>Total price : {total}</p>
        <button>Pay</button>
      </section>
    </main>
  );
};
export default Checkout;
