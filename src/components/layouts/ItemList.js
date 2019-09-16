import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import iphoneImg from "../../assets/iphone1.jpg";

class Item extends Component {
  renderProductLists = () => {
    const { products } = this.props;
    if (products) {
      return products.map(product => {
        return (
          <Card>
            <Card.Img variant="top" src={product.imageUrl} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>$ {product.price}</Card.Text>
              <div className="card__links">
                <Link to="/details/id">
                  <i className="fas fa-eye card__links-icon"></i>
                </Link>
                <Link to="/details/id">
                  <i className="fas fa-shopping-cart card__links-icon"></i>
                </Link>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        );
      });
    }
  };

  render() {
    return <div>{this.renderProductLists()}</div>;
  }
}

export default Item;
