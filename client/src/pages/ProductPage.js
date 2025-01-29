import React from "react";
import { Container, Row, Col, Card, Badge, Button, Table } from "react-bootstrap";

const ProductPage = () => {
  return (
    <Container className="mt-4">
      {/* Product Image Section */}
      <Row>
        <Col md={6}>
          <img
            src="/images/sample-car.jpg"
            alt="Car"
            className="img-fluid rounded"
          />
        </Col>
        <Col md={6}>
          <Card className="border-0">
            <Card.Body>
              <Badge bg="warning" text="dark" className="mb-2">
                Featured
              </Badge>
              <Card.Title className="fs-4">Jeep Compass (2018)</Card.Title>
              <Card.Subtitle className="text-muted mb-3">
                1.4 Limited
              </Card.Subtitle>
              <Card.Text>
                <strong>Fuel Type:</strong> Petrol | <strong>Kilometers:</strong> 55,833 KM |
                <strong> Transmission:</strong> Automatic
              </Card.Text>
              <hr />
              <Table borderless>
                <tbody>
                  <tr>
                    <td><strong>Owner:</strong></td>
                    <td>1st</td>
                  </tr>
                  <tr>
                    <td><strong>Location:</strong></td>
                    <td>Malad West, Mumbai</td>
                  </tr>
                  <tr>
                    <td><strong>Posting Date:</strong></td>
                    <td>12-JAN-25</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Description Section */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header as="h5">Description</Card.Header>
            <Card.Body>
              <Card.Text>
                Car loaded with 4 power windows, electric mirrors, touchscreen
                player (Alpine), 2 airbags, fog lamps, leather seats, reverse camera, ABS, and more.
              </Card.Text>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ABS</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Air Conditioning</td>
                    <td>Automatic Climate Control</td>
                  </tr>
                  <tr>
                    <td>Power Steering</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Reverse Parking Camera</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* CTA Section */}
      <Row className="mt-4 text-center">
        <Col>
          <Button variant="primary" size="lg" className="me-2">
            Contact Seller
          </Button>
          <Button variant="secondary" size="lg">
            Back to Listings
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
