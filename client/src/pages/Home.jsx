import { useEffect, useState } from "react";
import api from "../api/api";
import Footer from "./Footer";
import Nav from "./Nav";
import Slider from "./slider";
import Bestseller from "./Bestseller";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/books.php").then((res) => setBooks(res.data));
    api.get("/categories.php").then((res) => setCategories(res.data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    api.get(`/search.php?q=${search}`).then((res) => setBooks(res.data));
  };

  const filterByCategory = (id) => {
    const url = id ? `/books.php?cat=${id}` : `/books.php`;
    api.get(url).then((res) => setBooks(res.data));
  };

  const addToCart = (book) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((b) => b.id === book.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...book, qty: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Add to cart successfully");
  };

  return (
    <div>

      <Nav search={search} setSearch={setSearch} handleSearch={handleSearch} filterByCategory={filterByCategory} categories={categories}   />
      <Slider />
      <Bestseller addToCart={addToCart} />
      <div className="container mt-4 ">

        <h2
            className="d-flex justify-content-center fw-bold"
            style={{ color: "purple", fontSize: "2rem" }}
            >Categories</h2>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <button className="btn btn-outline-dark rounded-pill" onClick={() => filterByCategory(null)}>
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className="btn btn-outline-primary"
              onClick={() => filterByCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 col-sm-6 mb-4" key={book.id}>
              <div className="card h-100">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: 250, objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">${book.price}</p>
                  <button className="btn btn-success mt-auto"style={{
    backgroundColor: "#f41e33ff", // Bootstrap red
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "50px",
  }} onClick={() => addToCart(book)}>
                   Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
