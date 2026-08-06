// Home.jsx

import { Link } from "react-router-dom";

function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹129,999",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    },
    {
      id: 2,
      name: "MacBook Air M3",
      price: "₹149,999",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      id: 3,
      name: "Sony XM5",
      price: "₹29,999",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: "₹41,999",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="text-white d-flex align-items-center"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600') center/cover",
        }}
      >
        <div className="container text-center">
          <h1 className="display-2 fw-bold">Electronic Hub</h1>

          <p className="lead fs-3">
            Premium Electronics Store For Mobiles, Laptops & Accessories
          </p>

          <Link to="/products" className="btn btn-light btn-lg mt-3 px-5">
            Shop Now
          </Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Shop By Category</h2>

        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-center p-4 shadow">
              <h1>📱</h1>
              <h4>Mobiles</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-4 shadow">
              <h1>💻</h1>
              <h4>Laptops</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-4 shadow">
              <h1>🎧</h1>
              <h4>Headphones</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card text-center p-4 shadow">
              <h1>⌚</h1>
              <h4>Smart Watches</h4>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Featured Products</h2>

          <div className="row g-4">
            {featuredProducts.map((item) => (
              <div className="col-md-3" key={item.id}>
                <div className="card shadow border-0 h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    height="250"
                    alt={item.name}
                  />

                  <div className="card-body">
                    <h5>{item.name}</h5>

                    <h4>{item.price}</h4>

                    <button className="btn btn-dark w-100">Add To Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SALE BANNER */}
      <section className="container py-5">
        <div className="bg-dark text-white p-5 rounded text-center">
          <h1>Mega Electronics Sale</h1>

          <p className="lead">Up To 50% OFF On Premium Products</p>

          <button className="btn btn-light">Explore Deals</button>
        </div>
      </section>

      {/* TOP BRANDS */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Top Brands</h2>

        <div className="row text-center">
          <div className="col-md-2">
            <h3>Apple</h3>
          </div>
          <div className="col-md-2">
            <h3>Samsung</h3>
          </div>
          <div className="col-md-2">
            <h3>Sony</h3>
          </div>
          <div className="col-md-2">
            <h3>Dell</h3>
          </div>
          <div className="col-md-2">
            <h3>HP</h3>
          </div>
          <div className="col-md-2">
            <h3>Lenovo</h3>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Electronic Hub?</h2>

          <div className="row text-center">
            <div className="col-md-4">
              <h1>🚚</h1>
              <h4>Fast Delivery</h4>
              <p>Quick delivery all over India.</p>
            </div>

            <div className="col-md-4">
              <h1>🔒</h1>
              <h4>Secure Payment</h4>
              <p>100% safe payment methods.</p>
            </div>

            <div className="col-md-4">
              <h1>⭐</h1>
              <h4>Best Quality</h4>
              <p>Premium electronics products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="container py-5">
        <h2 className="text-center fw-bold mb-5">Customer Reviews</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow p-4">
              ⭐⭐⭐⭐⭐
              <p className="mt-3">Amazing products and fast delivery.</p>
              <strong>Rahul</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              ⭐⭐⭐⭐⭐
              <p className="mt-3">Best electronics website.</p>
              <strong>Aman</strong>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-4">
              ⭐⭐⭐⭐⭐
              <p className="mt-3">Great support and genuine products.</p>
              <strong>Priya</strong>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Subscribe Newsletter</h2>

          <div className="row justify-content-center mt-4">
            <div className="col-md-6">
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter Email"
              />

              <button className="btn btn-dark">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
