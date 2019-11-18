import React, { Component } from "react";
import { connect } from "react-redux";
import { getMacBooks } from "../../actions/productActions";
import GetMacBooks from "./GetMacBooks";

class MacBookList extends Component {
  componentDidMount() {
    this.props.getMacBooks();
  }

  render() {
    const { macBooks } = this.props;

    return (
      <div>
        <MacBooks macBooks={macBooks} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    macBooks: state.products.product
  };
};

export default connect(mapStateToProps, { getMacBooks })(MacBookList);
