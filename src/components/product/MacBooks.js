import React from "react";
import { connect } from "react-redux";
import { getMacBooks } from "../../actions/productActions";

const MacBooks = ({ getMacBooks }) => {
  let productContent;

  console.log(getMacBooks);

  if (getMacBooks) {
    productContent = getMacBooks.map(macbook => (
      <div key={macbook.id}>
        <GetMacBooks macbook={macbook} />
      </div>
    ));
  }
  return <div>{productContent}</div>;
};

export default connect(
  null,
  { getMacBooks }
)(MacBooks);
