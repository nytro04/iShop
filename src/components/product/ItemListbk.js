import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Container } from "react-bootstrap";
import Items from "./Items";
import Pagination from "../layouts/Pagination";
import { paginagte } from "../../utils/pagination";
import Spinner from "../common/Spinner";

// import ItemBk from "./ItemBk";

class ItemList extends Component {
  state = {
    pageSize: 5,
    currentPage: 1
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { products } = this.props;
    const { currentPage, pageSize } = this.state;
    let itemsSize;

    if (products) {
      itemsSize = products.length;
    }

    const ProductList = paginagte(products, currentPage, pageSize);

    return (
      <Container>
        <Items products={ProductList} />
        <Pagination
          itemsCount={itemsSize}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
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
