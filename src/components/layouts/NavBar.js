import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { signOut } from "../../actions/authActions";
import { getCart, addToCart } from "../../actions/cartActions";

class NavBar extends Component {
  render() {
    const { isLoggedIn, signOut, cart } = this.props;

    const cartQty = cart.length
      ? cart.length
      : JSON.parse(localStorage.getItem("iShopCart")).length;

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

              <Nav.Link
                data-toggle="modal"
                data-target="#cartModal"
                as={Link}
                to="/cart"
                className="cart-icon"
                // onClick={this.cartState}
              >
                <i className="fas fa-shopping-cart"></i>
                <span className="item-count">{cartQty}</span>
              </Nav.Link>

              <NavDropdown
                title={<i className="fas fa-user"></i>}
                id="collasible"
              >
                {/* <NavDropdown.Item as={Link} to="/profile">
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
                </NavDropdown.Item> */}

                {isLoggedIn ? (
                  <div>
                    <NavDropdown.Item onClick={signOut}>
                      Signed in as tweenyBrown
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile">
                      Your profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cart">
                      Cart
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/settings">
                      Sign out
                    </NavDropdown.Item>
                  </div>
                ) : (
                  <div>
                    <NavDropdown.Item as={Link} to="/login">
                      Sign In
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/cart">
                      Cart
                    </NavDropdown.Item>
                  </div>
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
    isLoggedIn: state.auth.isLoggedIn,
    cart: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  { signOut, addToCart, getCart }
)(NavBar);
