import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/apple_logo.png";
class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="nav navbar navbar-expand-sm navbar-light nav_line">
          <div className="container">
            <Link to="/" className="navbar-brand">
              iShop
              <img src={LogoImg} alt="Logo" className="header__logo" />
              {/* <i class="fab fa-apple"></i> */}
            </Link>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarDrop"
              //   aria-controls="navbarSupportedContent"
              //   aria-expanded="false"
              //   aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarDrop">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    iShop
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Categories
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/macbooks" className="dropdown-item">
                      MacBooks
                    </Link>
                    <Link to="/iphones" className="dropdown-item">
                      iPhones
                    </Link>
                    <Link to="/imacs" className="dropdown-item">
                      iMacs
                    </Link>
                    <Link to="/iwatches" className="dropdown-item">
                      iWatches
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-shopping-cart"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-heart"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fas fa-user"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
