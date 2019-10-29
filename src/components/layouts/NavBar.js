import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { signOut } from "../../actions/authActions";
import { getCart } from "../../actions/cartActions";
import { getMacBooks } from "../../actions/productActions";

class NavBar extends Component {
  state = {
    cartQty: 0
  };

  componentDidMount() {
    this.setState({
      cartQty: JSON.parse(localStorage.getItem("iShopCart")).length
    });
  }


  render() {
    const { isLoggedIn, signOut } = this.props;

    // if (cartQty.length === 0) {
    //   cartQty.length = 0;
    // } else {
    //   cartQty = JSON.parse(localStorage.getItem("iShopCart")).length;
    // }

    // console.log(cartQty.length);

    // const cartQty = JSON.parse(localStorage.getItem("iShopCart")).length;

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
              {/* <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link> */}
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  iPhones
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/getMacbooks"

                  // onClick={this.props.getMacBooks}
                >
                  MacBooks
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  iMacs
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/">
                  iWatches
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">
                <i
                  className="fas fa-heart"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Liked items"
                  delay="10"
                ></i>
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/cart"
                className="cart-icon"
                // onClick={this.cartState}
              >
                <i
                  className="fas fa-shopping-cart"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="User Cart"
                ></i>
                <span className="item-count">{this.state.cartQty}</span>
              </Nav.Link>

              <NavDropdown
                title={
                  <i
                    className="fas fa-user"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="User Management"
                    delay="100"
                  ></i>
                }
                id="collasible"
              >
                {isLoggedIn ? (
                  <div>
                    <NavDropdown.Item>tweenyBrown</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/profile">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={signOut}>
                      Sign out
                    </NavDropdown.Item>
                  </div>
                ) : (
                  <div>
                    <NavDropdown.Item as={Link} to="/login">
                      Log In
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/register">
                      Sign Up
                    </NavDropdown.Item>
                  </div>
                )}
              </NavDropdown>
              {isLoggedIn ? (
                <Nav.Link as={Link} to="/products/new">
                  <i
                    className="fas fa-plus"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Add new product"
                    delay="100"
                  ></i>
                </Nav.Link>
              ) : null}
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
  { signOut, getCart, getMacBooks }
)(NavBar);
