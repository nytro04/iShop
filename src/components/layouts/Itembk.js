import React from "react";

const Item = ({ products }) => {
  return (
    <div>
      {products &&
        products.map(product => (
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default Item;
