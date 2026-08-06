import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img
          src={product.image}
          className="card-img-top"
          height="250"
          alt={product.title}
        />

        <div className="card-body">
          <h5>{product.title}</h5>

          <p>₹{product.price}</p>

          <button
            className="btn btn-dark w-100 mb-2"
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

          <Link
            className="btn btn-outline-dark w-100"
            to={`/product/${product.id}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
