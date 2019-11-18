import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { cartItem } = this.props;
    return (
      <div
        className="card-body"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <div className="row">
          <div className="col-12 col-sm-12 col-md-2 text-center my-3">
            <img
              className="img-responsive"
              src={cartItem.imageUrl}
              alt="prewiew"
              width="120"
              height="80"
            />
          </div>
          <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6 my-3">
            <h6 className="product-name my-3">
              <strong>{cartItem.name}</strong>
            </h6>
            {/* <p className="my-3">
              <small>{cartItem.description}</small>
            </p> */}
          </div>
          <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row my-3">
            <div
              className="col-3 col-sm-3 col-md-6 text-md-right my-3"
              style={{ paddingTop: "5px" }}
            >
              <h6>
                <strong>
                  {cartItem.price}{" "}
                  <span className="text-muted my-3">
                    <i class="fas fa-times"></i>
                  </span>
                </strong>
              </h6>
            </div>
            <div className="col-4 col-sm-4 col-md-4 my-3">
              <input
                type="number"
                className="form-control form-control-sm"
                style={{ width: "70px" }}
              />
            </div>
            <div className="col-2 col-sm-2 col-md-2 text-right my-3">
              <button
                onClick={this.onDeleteClick.bind(this, cartItem._id)}
                type="button"
                className="btn btn-outline-danger btn-xs"
              >
                <i className="fa fa-trash" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default CartItem;
