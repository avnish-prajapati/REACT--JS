import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4>Cart Is Empty</h4>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <h5>{item.title}</h5>

                  <p>₹{item.price}</p>
                </div>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3 className="mt-4">Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
