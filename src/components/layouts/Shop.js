import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import ItemList from "./ItemList";
import { Container } from "react-bootstrap";

export class Shop extends Component {
  render() {
    const { products } = this.props;
    console.log(this.props);
    return (
      <div>
        Trending...
        {/* <ItemList products={products} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    products: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["products"])
  // firestoreConnect([{ collection: "products", orderBy: ["createdAt", "desc"] }])
)(Shop);
