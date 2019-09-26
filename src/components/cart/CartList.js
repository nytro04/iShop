import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../actions/cartActions";
import CartItems from "./CartItems";

class CartList extends Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    const { cart } = this.props;

    return (
      <div>
        <CartItems cart={cart} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    cart: state.cart.cart
  };
};

export default connect(
  mapStateToProps,
  { getCart }
)(CartList);
