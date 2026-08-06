import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={product.image} alt="" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>

          <h3 className="my-3">₹{product.price}</h3>

          <p>{product.description}</p>

          <button className="btn btn-dark" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
