import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ title, image, description, price }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5 className="text-success">₹ {price}</h5>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
