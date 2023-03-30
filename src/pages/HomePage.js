import * as data from "../data";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { checkInCart } from "../utils/CheckInCart";
import { toast } from "react-toastify";
const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addToCartHandler = (product) => {
    toast.success(`${product.name} added to cart`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <div key={product.id} className="product">
                <div className="productImg">
                  <img src={product.image} />
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <div>
                    <p>Price: {product.price} $</p>
                    {product.discount !== 0 ? (
                      <p>Sale : {product.offPrice} $</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    onClick={() => addToCartHandler(product)}
                    className="addToCartBtn"
                  >
                    {checkInCart(cart, product) ? "In Cart" : "Add To Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
