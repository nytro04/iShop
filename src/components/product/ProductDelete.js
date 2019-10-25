import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../../actions/productActions";
import Modal from "../Modal";

class ProductDelete extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id);
  }

  render() {
    return <Modal />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { products } = state.firestore.data;
  const product = products[id];
  return {
    product
  };
};

export default connect(
  mapStateToProps,
  { getProduct, deleteProduct }
)(ProductDelete);
