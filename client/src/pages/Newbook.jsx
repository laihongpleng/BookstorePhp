import { useEffect, useState } from "react";
import api from "../api/api"; // your axios or fetch wrapper
import Nav from "./Nav";
import Footer from "./Footer";

export default function NewBook({ addToCart }) {
  const [newBooks, setNewBooks] = useState([]);

  useEffect(() => {
    api.get("/best_seller.php") // your PHP API for new books
      .then((res) => setNewBooks(res.data))
      .catch((err) => console.error("API Error:", err));
  }, []);

  return (
    <>
    <Nav/>
    <div className="container mt-4">
      <h2 className="text-center fw-bold mb-4" style={{ color: "purple" }}>
        New Books
      </h2>
      <div className="row">
        {newBooks.map((book) => (
          <div className="col-12 mb-4" key={book.id}>
            <div className="card h-100 flex-row" style={{ maxHeight: "250px" }}>
              <img
                src={book.image}
                alt={book.title}
                className="img-fluid"
                style={{ width: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">${book.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => addToCart(book)}
                  style={{ maxWidth: "150px" }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
