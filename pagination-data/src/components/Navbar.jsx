import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ElectroMart
        </Link>

        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">
            Home
          </Link>

          <Link className="nav-link" to="/products">
            Products
          </Link>

          <Link className="nav-link" to="/cart">
            Cart ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}
<nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
  <div className="container">
    <a className="navbar-brand fw-bold fs-3">ElectroMart</a>

    <div className="ms-auto d-flex gap-3">
      <a className="nav-link text-white">Home</a>

      <a className="nav-link text-white">Products</a>

      <a className="nav-link text-white">Cart</a>

      <button className="btn btn-light">Login</button>
    </div>
  </div>
</nav>;

export default Navbar;
