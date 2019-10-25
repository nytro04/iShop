import React from "react";
// import { Card, Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import { deleteProduct, getMacBooks } from "../../actions/productActions";

class Item extends React.Component {
  onAddToCart = () => {
    const { imageUrl, name, price, id } = this.props.product;

    const cartData = {
      imageUrl,
      name,
      price,
      id,
      quantity: 1
    };

    this.props.addToCart(cartData);
    this.props.getMacBooks();
  };

  // handleDelete = id => {};

  render() {
    const { product, authId } = this.props;
    const { authorId } = product;

    console.log("signed in user id", authId);
    console.log("product author", authorId);
    console.log(product);

    return (
      <div>
        <div className="row">
          <div className="container py-1 col-8">
            <div className="card p-3 d-flex ">
              <div className="row ">
                <div className="col-md-3">
                  <img src={product.imageUrl} width="160px" height="120px" />
                </div>
                <div className="col-md-6">
                  <div className="card-block">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">
                      {product.description} Lorem ipsum dolor sit amet
                      consectetu ...
                    </p>
                    <p className="card-subtitle">GH₵ {product.price}</p>
                  </div>
                </div>
                <div className="col-md-3 align-self-end">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={this.onAddToCart}
                  >
                    <i className="fas fa-list-ul card__links-icon"> </i>
                  </Link>
                  <span onClick={this.onAddToCart}>
                    <i className="fas fa-shopping-cart card__links-icon"></i>
                  </span>
                  {authId === authorId ? (
                    <Link
                      to={`/products/edit/${product.id}`}
                      onClick={this.onAddToCart}
                    >
                      <i className="fas fa-pencil-alt text-primary card__links-icon"></i>
                    </Link>
                  ) : null}
                  {authId === authorId ? (
                    <span onClick={() => this.props.deleteProduct(product.id)}>
                      <i className="fas fa-trash-alt text-danger card__links-icon"></i>
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authId: state.firebase.auth.uid
  };
};

export default connect(
  mapStateToProps,
  { addToCart, deleteProduct, getMacBooks }
)(Item);
