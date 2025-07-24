import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white py-5 rounded-top shadow-lg"
      style={{ backgroundColor: "#30075c" }}
    >
      <div className="container">
        <div className="row">
          {/* BookishCloud Section */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h3 className="h5 mb-3" style={{ fontFamily: "Taprom, sans-serif" }}>
              សំណេរ
              <sup style={{ fontSize: "0.6em", marginLeft: "2px" }}>&trade;</sup>
            </h3>
            <p className="small">
              Pages rustle, like clouds in the sky, Where imagination learns to fly.
              សំណេរ's magic, soft and profound, The best of stories, are always found.
            </p>
          </div>

          {/* Link to Category */}
          <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
            <h3 className="h5 mb-3">Link to Category</h3>
            <div className="d-flex justify-content-center justify-content-md-start">
              {/* First column */}
              <ul className="list-unstyled me-5">
                <li><a href="#" className="text-white text-decoration-none">Fantasy</a></li>
                <li><a href="#" className="text-white text-decoration-none">Romance</a></li>
              </ul>

              {/* Second column */}
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Mystery, Thrillers & Crime</a></li>
                <li><a href="#" className="text-white text-decoration-none">Science Fiction</a></li>
                <li><a href="#" className="text-white text-decoration-none">Non-fiction</a></li>
              </ul>
            </div>
          </div>

          {/* Follow Us & Learn More */}
          <div className="col-md-4 text-center text-md-start">
            <h3 className="h5 mb-3">Follow us</h3>
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fab fa-tiktok fa-lg"></i>
              </a>
              <a href="https://www.threads.com/" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="fa-brands fa-threads"></i>
              </a>
            </div>

            <h3 className="h5 mb-3">Learn More About Us</h3>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col text-center">
            <p className="text-white small mb-0">
              &copy; {new Date().getFullYear()} សំណេរ. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
