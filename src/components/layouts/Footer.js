import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5 mb-3 p-2 footer_line">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-4 mb-4">
          <Link to="/">
            <i className="fab fa-facebook mr-3 text-secondary" />
          </Link>
          <Link to="/">
            <i className="fab fa-twitter mr-3 text-secondary" />
          </Link>
          <Link to="/">
            <i className="fab fa-instagram mr-3 text-secondary" />
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          Copyright &copy; {new Date().getFullYear()}
          <Link to="/" className="card__links-icon">
            {" "}
            iShop
          </Link>
        </div>
        <div className="col-md-4 mb-4">
          <Link to="/">
            <i className="fas fa-home mr-3 text-secondary" />
          </Link>
          <Link to="/">
            <i className="fas fa-users mr-3 text-secondary" />
          </Link>
          <Link to="/">
            <i className="fas fa-phone mr-3 text-secondary" />
          </Link>
        </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;
