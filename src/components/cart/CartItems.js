import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "../../actions/cartActions";
import Modal from "../Modal";

class CartItems extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }

  render() {
    const { cart } = this.props;
    console.log(cart);
    let cartContents;

    if (cart) {
      cartContents = cart.map(cartItem => (
        <div key={cartItem.id}>
          {/* <CartItem cartItem={cartItem} /> */}
          <Modal />
        </div>
      ));
    } else if (cart === null) {
      cartContents = <div>No items in cart</div>;
    }

    return <div>{cartContents}</div>;
  }
}

export default connect(
  null,
  { getCart }
)(CartItems);
