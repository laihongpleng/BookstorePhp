import Nav from "./Nav";
import Footer from "./Footer";

const Aboutus = () => {
    const search = "";
  const setSearch = () => {};
  const handleSearch = (e) => e.preventDefault();
  const categories = [];
  const filterByCategory = () => {};
  return (
    <>
      <Nav />
      <div className="container py-5">
        {/* Section 1: Introduction to BookishCloud */}
        <section className="row align-items-center justify-content-center mb-5 g-4">
          <div className="col-lg-6 col-md-8 col-sm-10 text-center">
            <img
              src="https://i.pinimg.com/736x/f8/22/50/f82250e17ccb99d314a33cb4f343e98f.jpg"
              alt="Family reading with books on a tablet"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-10">
            <p className="fs-5">
              <p style={{ fontFamily: "Taprom, sans-serif" }}>សំណេរ</p>  works to connect readers with independent booksellers all over
              the world. We believe local bookstores are essential community hubs
              that foster culture, curiosity, and a love of reading, and we’re
              committed to helping them thrive.
            </p>
            <p className="fs-5">
              <strong>
                Every purchase on the site financially supports independent
                bookstores.
              </strong>{" "}
              Our platform gives independent bookstores tools to compete online
              and financial support to help them maintain their presence in local
              communities.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-5">How It Works</h2>
          <div className="row justify-content-center g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="card shadow-sm flex-fill">
                <div className="card-body d-flex flex-column align-items-center p-4">
                  <div
                    className="mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://i.pinimg.com/736x/09/0f/b0/090fb0cdd2783b60a0156f1b7ad36975.jpg"
                      alt="Bookstore front"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title h4 mb-3">Pick a Book</h3>
                  <p className="card-text text-muted">
                    Visit our website and select the book that your fav and
                    you'd like to support. You can add it to cart as many as you
                    want.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4 d-flex">
              <div className="card shadow-sm flex-fill">
                <div className="card-body d-flex flex-column align-items-center p-4">
                  <div
                    className="mb-3"
                    style={{
                      width: "150px",
                      height: "150px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="https://thumbs.dreamstime.com/b/shopping-trolley-cart-full-books-concept-19836392.jpg"
                      alt="Stack of books"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="card-title h4 mb-3">Buy a Book</h3>
                  <p className="card-text text-muted">
                    Your order will be filled directly by our distributor, and
                    the full profit from your purchase will be sent to our
                    bookstore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our History Section */}
        <section className="text-center bg-white p-5 rounded mb-5">
          <div
            className="mb-4"
            style={{
              width: "100%",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          >
            <img
              src="https://thumbs.dreamstime.com/b/bookshop-bookstore-building-facade-row-books-window-vector-illustration-99251970.jpg"
              alt="Marketplace building"
              className="img-fluid rounded"
            />
          </div>
          <h2 className="display-5 fw-bold mb-4">Our History</h2>
          <p
            className="lead text-muted mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <p style={{ fontFamily: "Taprom, sans-serif" }}>សំណេរ</p> began as a small, independent bookstore in Phnom Penh,
            founded in 2010 by a group of passionate book lovers. They envisioned
            a space where the local community could gather, share their love of
            reading, and discover new literary worlds. Inspired by the idea of
            "Cloud Cuckoo Land," a place of imagination and literary exploration,
            they named their store "Bookishcloud."
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
