import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { auth } from "../../firebase/Firebase.utils";
// import CartIcon from "../../cart/CartIcon";

// import LogoImg from "../../assets/apple_logo.png";

class NavBar extends Component {
  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav_line">
          <Navbar.Brand as={Link} to="/">
            <span className="">iShop</span>
            <i className="fab fa-apple"></i>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  iPhones
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  MacBooks
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  iMacs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  iWatches
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                <i className="fas fa-heart"></i>
              </Nav.Link>

              <Nav.Link as={Link} to="/" className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
                <span className="item-count">55</span>
              </Nav.Link>

              {/* <Nav.Link as={Link} to="/">
                <i className="fas fa-user"></i>
              </Nav.Link> */}

              {/* if user in signedin show this else show signedin */}
              <NavDropdown
                title={<i className="fas fa-user"></i>}
                id="collasible"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Signed in as tweenyBrown
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  Your profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart">
                  Cart
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/settings">
                  Settings
                </NavDropdown.Item>

                {currentUser ? (
                  <NavDropdown.Item onClick={() => auth.signOut()}>
                    Sign out
                    {/* {currentUser.displayName} */}
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item as={Link} to="/login">
                    Sign In
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          {/* <CartIcon /> */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(NavBar);
