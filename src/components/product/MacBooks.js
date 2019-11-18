import React from "react";
// import { connect } from "react-redux";
// import { getMacBooks } from "../../actions/productActions";

const MacBooks = ({ macBooks }) => {
  let productContent;

  console.log(macBooks);

  if (macBooks) {
    productContent = macBooks.map(macbook => (
      <div key={macbook.id}>
        <GetMacBooks macbook={macbook} />
      </div>
    ));
  } else {
    <div>Loading...</div>;
  }
  return <div>{productContent}</div>;
};

export default MacBooks;
