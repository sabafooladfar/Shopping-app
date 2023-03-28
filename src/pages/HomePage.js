import * as data from "../data";
import Layout from "../Layout/Layout";

const HomePage = () => {

const addToCartHandler =(product)=>{
  console.log(product)
}

  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <div className="product">
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
                  <button onClick={()=>addToCartHandler(product)} className="addToCartBtn">Add To Cart</button>
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
