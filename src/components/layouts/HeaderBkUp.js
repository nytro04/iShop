import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/apple_logo.png";
import iphoneImg from "../../assets/iphone1.jpg";
import macbookImg from "../../assets/mac1.jpg";
import iMacImg from "../../assets/imac1.jpeg";
import iwatchImg from "../../assets/iwatch1.jpeg";

class Header extends Component {
  render() {
    return (
      <div className="nav_line">
        <nav className="nav navbar navbar-expand-sm navbar-light">
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

        <div className="carousel slide" id="slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li className="active" data-target="slide" data-slide-to="0"></li>
            <li data-target="slide" data-slide-to="1"></li>
            <li data-target="slide" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={iphoneImg}
                alt="macbook"
                className="d-block img-fluid"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>iPhone</h3>
                <p>iPhones</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={macbookImg}
                alt="macbook"
                className="d-block img-fluid"
              />
              <div className="carousel-caption d-none d-md-block">
                <h3>MacBooks</h3>
                <p>MacBooks</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={iMacImg} alt="iMac" className="d-block img-fluid" />
              <div className="carousel-caption d-none d-md-block">
                <h3>iMac</h3>
                <p>iMacs</p>
              </div>
            </div>
            <div className="carousel-item active">
              <img src={iwatchImg} alt="iwatch" className="d-block img-fluid" />
              <div className="carousel-caption d-none d-md-block">
                <h3>iWatches</h3>
                <p>iWatches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
