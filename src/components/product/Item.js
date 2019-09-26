import React from "react";
import { Card, Row, Col, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

class Item extends React.Component {
  renderCards = () => {
    const { products } = this.props;
    if (products) {
      return products.map(product => {
        return (
          <Col key={product.id} lg={4} md={3} sm={6}>
            <Card>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>$ {product.price}</Card.Text>
                <div className="card__links">
                  <Link to={`/products/${product.id}`}>
                    <i class="fas fa-list"></i>
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
          </Col>
        );
      });
    }
  };

  render() {
    return (
      <CardGroup>
        <Row>{this.renderCards()}</Row>
      </CardGroup>
    );
  }
}

export default Item;
