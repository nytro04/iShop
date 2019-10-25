import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { getProduct } from "../../actions/productActions";

class ProductDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.getProduct(id);
  }
  renderProductDetails = () => {
    const { imageUrl, name, price, description } = this.props.product;

    if (this.props.product) {
      return (
        <section className="section-content bg padding-y-sm mt-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-md-9 col-sm-12">
                <main className="card">
                  <div className="row no-gutters">
                    <aside className="col-sm-6 border-right">
                      <article className="gallery-wrap">
                        <div className="img-big-wrap">
                          <div>
                            {" "}
                            <img
                              className="img-fluid"
                              src={imageUrl}
                              alt={name}
                            />
                          </div>
                        </div>
                      </article>
                    </aside>
                    <aside className="col-sm-6">
                      <article className="card-body">
                        <h3 className="title m-3 text-center font-weight-bold">
                          {name}
                        </h3>

                        <div className="m-3">
                          <h3
                            className="price text-center"
                            style={{ color: "#55c57a" }}
                          >
                            GH₵ {price}
                          </h3>
                        </div>
                        <dl>
                          <dt>Description:</dt>
                          <dd>
                            <p>{description} </p>
                          </dd>
                        </dl>
                        <hr />
                        <div className="row">
                          <div className="col-sm-5">
                            <dl className="dlist-inline">
                              <dt>
                                Quantity:
                                <dd>
                                  <select
                                    className="form-control form-control-sm"
                                    style={{ width: "70px" }}
                                  />
                                </dd>
                              </dt>
                            </dl>
                          </div>
                        </div>
                        <hr />

                        <Link to="/carts" className="btn  btn-outline-info">
                          {" "}
                          Add To Cart{" "}
                        </Link>
                        <Link to="#" className="btn  btn-outline-info mx-3">
                          CheckOut{" "}
                        </Link>
                      </article>
                    </aside>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">{this.renderProductDetails()}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const { products } = state.firestore.data;
  const product = products[id];
  return {
    product
  };
};

export default compose(
  connect(
    mapStateToProps,
    { getProduct }
  )
  // firestoreConnect(["products"])
)(ProductDetails);
