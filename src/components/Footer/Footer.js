import React from "react";
import { NavLink } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      {/* Footer Start  */}
      <div
        className="container-fluid bg-dark text-light py-5 wow fadeInUp"
        data-wow-delay="0.3s"
        style={{}}
      >
        <div className="container pt-5">
          <div className="row g-5 pt-4">
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Quick Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2 footera" href="/">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a className="text-light mb-2 footera" href="/about">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </a>
                <a className="text-light mb-2 footera" href="/service">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a className="text-light mb-2 footera" href="/">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Latest
                  Blog
                </a>
                <a className="text-light footera" href="/contact">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Popular Links</h3>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-light mb-2 footera" href="/">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a className="text-light mb-2 footera" href="/about">
                  <i className="bi bi-arrow-right text-primary me-2"></i>About
                  Us
                </a>
                <a className="text-light mb-2 footera" href="/service">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a className="text-light mb-2 footera" href="/blog">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Latest
                  Blog
                </a>
                <a className="text-light footera" href="/>contact">
                  <i className="bi bi-arrow-right text-primary me-2"></i>Contact
                  Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <i className="bi bi-geo-alt text-primary me-2"></i>Mirpur1,
                Bangladesh
              </p>
              <p className="mb-2">
                <i className="bi bi-envelope-open text-primary me-2"></i>
                blogbd@gmail.com
              </p>
              <p className="mb-0">
                <i className="bi bi-telephone text-primary me-2"></i>
                +8801644451655
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Follow Us</h3>
              <div className="d-flex">
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-twitter fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-facebook-f fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded me-2"
                  href="#"
                >
                  <i className="fab fa-linkedin-in fw-normal"></i>
                </a>
                <a
                  className="btn btn-lg btn-primary btn-lg-square rounded"
                  href="#"
                >
                  <i className="fab fa-instagram fw-normal"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-light py-4"
        style={{ background: "#051225" }}
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <a className="text-white border-bottom" href="/">
                  BlogBD
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                Designed by{" "}
                <a className="text-white border-bottom" href="/">
                  Tanmoy Paul
                </a>
                <br></br>
                Distributed by{" "}
                <a className="text-white border-bottom" href="/">
                  Tanmoy Paul
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End  */}
    </div>
  );
};

export default Footer;
