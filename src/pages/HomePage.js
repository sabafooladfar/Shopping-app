import * as data from "../data";
import Layout from "../Layout/Layout";
import { useCartActions } from "../Providers/CartProvider";

const HomePage = () => {
  const dispatch = useCartActions();
  const addToCartHandler = (product) => {
    // console.log(product);
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
                    Add To Cart
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
