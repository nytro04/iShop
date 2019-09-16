import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Container } from "react-bootstrap";

import Item from "./Item";

class ItemList extends Component {
  render() {
    const { products } = this.props;
    console.log(products);
    return (
      <Container>
        <Item products={products} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.firestore.ordered.products
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["products"])
  // firestoreConnect([{ collection: "products", orderBy: ["createdAt", "desc"] }])
)(ItemList);
