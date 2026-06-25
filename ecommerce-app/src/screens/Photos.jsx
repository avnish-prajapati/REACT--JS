import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Photos() {
  const [products, setProducts] = useState([]);
  const [store, setStore] = useState([]); // this need to filter one data which has been going to changed ..and default one will be unchanged

  const [search, setSearch] = useState("");

  const handleFetchPhotos = async () => {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products); // default data from api
    setStore(res.data.products); // the one to used for filter it evry time i used to remove or run a function on it
  };

  const getSearch = (e) => {
    // get searvh to took input from user
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    // function jo search ko handle karega and state mai value ..
    setProducts(
      products.filter(
        (product, i) =>
          product.title.toLowerCase().includes(search.toLowerCase()) ||
          product.category.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  const handleCategoryFilter = (e) => {
    setProducts(store);
    console.log(products.length);
    if (e.target.value == "all") {
      setProducts(store);
    } else {
      setProducts(
        store.filter((product) => product.category == e.target.value),
      );
    }
  };

  const handlePriceFilter = (e) => {
    console.log(e.target.value);
    setProducts(
      store.filter((product) => product.price >= Number(e.target.value)),
    );
  };

  useEffect(() => {
    handleFetchPhotos();
  }, []);

  return (
    <>
      <div className="container py-4">
        {/* Search & Filter Section */}
        <div className="bg-white p-4 rounded shadow-sm mb-5 border">
          <div className="row g-3 align-items-center">
            <div className="col-md-4">
              <input
                onChange={getSearch}
                type="text"
                className="form-control"
                placeholder="Search products..."
              />
            </div>

            <div className="col-md-auto">
              <button onClick={handleSearch} className="btn btn-dark px-4">
                Search
              </button>
            </div>

            <div className="col-md-3">
              <select onChange={handleCategoryFilter} className="form-select">
                <option value={"all"}>All Categories</option>
                <option value={"beauty"}>Beauty</option>
                <option value={"fragrances"}>Fragrances</option>
                <option value={"furniture"}>Furniture</option>
                <option value={"groceries"}>Groceries</option>
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">
                Price-1------------------------2500-Range
              </label>
              <input
                onChange={handlePriceFilter}
                type="range"
                min={1}
                max={2500}
                className="form-range"
              />
            </div>

            <div className="col-md-auto">
              <button
                onClick={handleFetchPhotos}
                className="btn btn-outline-dark"
              >
                Clear Filter
              </button>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="row g-4">
          {products.map((product, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card product-card border-0 h-100">
                  <img
                    src={product.thumbnail}
                    className="card-img-top p-3"
                    alt={product.title}
                  />

                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{product.title}</h5>

                    <p className="text-secondary mb-2">{product.category}</p>

                    <h4 className="fw-bold text-dark">$ {product.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
