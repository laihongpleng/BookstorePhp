import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Nav = ({
  search,
  setSearch,
  handleSearch,
  categories = [],
  filterByCategory,
}) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top px-4 py-2"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Logo */}
      <Link className="navbar-brand fw-bold" to="/">
        <img src={logo} alt="BookLogo" style={{ height: 40 }} />
      </Link>

      {/* Toggler for mobile */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible Nav */}
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul
          className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
          style={{ "--bs-scroll-height": "100px" }}
        >
          <li className="nav-item me-3">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/NewBook">
              New Book
            </Link>
          </li>

          {/* Categories Dropdown */}
          <li className="nav-item dropdown me-3">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories
            </a>

            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => filterByCategory(null)}
                >
                  All
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    className="dropdown-item"
                    onClick={() => filterByCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/RomancePromotionPage">
              Special Offers
            </Link>
          </li>

          <li className="nav-item me-3">
            <Link className="nav-link" to="/Aboutus">
              About Us
            </Link>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="d-flex me-3" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">
            🔍
          </button>
        </form>

        {/* Login & Cart */}
        <div className="d-flex align-items-center">
          <Link className="btn btn-outline-secondary me-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-dark" to="/cart">
            🛒
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
