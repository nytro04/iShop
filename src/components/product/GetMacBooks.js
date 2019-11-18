import React, { Component } from "react";
import { connect } from "react-redux";
import { getMacBooks } from "../../actions/productActions";
import { Link } from "react-router-dom";

class GetMacBooks extends Component {
  componentDidMount() {
    this.props.getMacBooks();
  }

  render() {
    const { authId } = this.props;

    const { macbook } = this.props;

    console.log(macbook);

    return (
      <div>MacBooks</div>
      // <div>
      //   <h3 className="text-center m-3">MacBooks</h3>
      //   <div>
      //     <div className="row">
      //       <div className="container py-1 col-8">
      //         <div className="card p-3 d-flex ">
      //           <div className="row ">
      //             <div className="col-md-3">
      //               <img src={macbook.imageUrl} width="160px" height="120px" />
      //             </div>
      //             <div className="col-md-6">
      //               <div className="card-block">
      //                 <h4 className="card-title">{macbook.name}</h4>
      //                 <p className="card-text">
      //                   {macbook.description} Lorem ipsum dolor sit amet
      //                   consectetu ...
      //                 </p>
      //                 <p className="card-subtitle">GH₵ {macbook.price}</p>
      //               </div>
      //             </div>
      //             <div className="col-md-3 align-self-end">
      //               <Link
      //                 to={`/products/${macbook.id}`}
      //                 onClick={this.onAddToCart}
      //               >
      //                 <i className="fas fa-list-ul card__links-icon"> </i>
      //               </Link>
      //               <span onClick={this.onAddToCart}>
      //                 <i className="fas fa-shopping-cart card__links-icon"></i>
      //               </span>
      //               {/* {authId === authorId ? (
      //                 <Link
      //                   to={`/products/edit/${macbook.id}`}
      //                   onClick={this.onAddToCart}
      //                 >
      //                   <i className="fas fa-pencil-alt text-primary card__links-icon"></i>
      //                 </Link>
      //               ) : null}
      //               {authId === authorId ? (
      //                 <span
      //                   onClick={() => this.props.deleteProduct(macbook.id)}
      //                 >
      //                   <i className="fas fa-trash-alt text-danger card__links-icon"></i>
      //                 </span>
      //               ) : null} */}
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authId: state.firebase.auth.id,
    products: state.products.product
  };
};

export default connect(mapStateToProps, { getMacBooks })(GetMacBooks);
