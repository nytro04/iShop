import React from "react";
import ItemBk from "./ItemBk";

const Items = ({ products }) => {
  let productsContent;

  if (products) {
    productsContent = products.map(product => (
      <div key={product.id}>
        <ItemBk product={product} />
      </div>
    ));
  }

  return <div>{productsContent}</div>;
};

export default Items;
