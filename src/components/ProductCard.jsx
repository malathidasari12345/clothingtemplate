import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import "../assets/styles/productcard.css";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4 d-flex justify-content-center">
      <Card className="card-hover" style={{ width: "80%", margin: "20px", minHeight: "400px" }}>
        <Card.Img variant="top" src={image} style={{ height: "250px", objectFit: "cover" }} />
        <Card.Body className="d-flex flex-column justify-content-between" style={{ padding: "15px" }}>
          <div>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Text className="text-center">
              <strong>Price: ${price}</strong>
            </Card.Text>
            <Card.Text className="text-center">
              <strong>Rating: {rating}</strong>
            </Card.Text>
          </div>
          <Button variant="success" className="w-100 mt-auto">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const ProductGrid = ({ products }) => {
  return (
    <Row>
      <center><h1>Kids Collection</h1></center>
      {products.map((product, index) => (
        <ProductCard 
          key={index}
          image={product.image}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </Row>
  );
};

export default ProductGrid;
