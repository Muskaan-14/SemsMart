// import React from "react";
// import { Container, Row, Col, Card, Badge, Button, Table } from "react-bootstrap";

// const ProductPage = () => {
//   return (
//     <Container className="mt-4">
//       {/* Product Image Section */}
//       <Row>
//         <Col md={6}>
//           <img
//             src="/images/sample-car.jpg"
//             alt="Car"
//             className="img-fluid rounded"
//           />
//         </Col>
//         <Col md={6}>
//           <Card className="border-0">
//             <Card.Body>
//               <Badge bg="warning" text="dark" className="mb-2">
//                 Featured
//               </Badge>
//               <Card.Title className="fs-4">Jeep Compass (2018)</Card.Title>
//               <Card.Subtitle className="text-muted mb-3">
//                 1.4 Limited
//               </Card.Subtitle>
//               <Card.Text>
//                 <strong>Fuel Type:</strong> Petrol | <strong>Kilometers:</strong> 55,833 KM |
//                 <strong> Transmission:</strong> Automatic
//               </Card.Text>
//               <hr />
//               <Table borderless>
//                 <tbody>
//                   <tr>
//                     <td><strong>Owner:</strong></td>
//                     <td>1st</td>
//                   </tr>
//                   <tr>
//                     <td><strong>Location:</strong></td>
//                     <td>Malad West, Mumbai</td>
//                   </tr>
//                   <tr>
//                     <td><strong>Posting Date:</strong></td>
//                     <td>12-JAN-25</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* Description Section */}
//       <Row className="mt-4">
//         <Col>
//           <Card>
//             <Card.Header as="h5">Description</Card.Header>
//             <Card.Body>
//               <Card.Text>
//                 Car loaded with 4 power windows, electric mirrors, touchscreen
//                 player (Alpine), 2 airbags, fog lamps, leather seats, reverse camera, ABS, and more.
//               </Card.Text>
//               <Table striped bordered hover>
//                 <thead>
//                   <tr>
//                     <th>Feature</th>
//                     <th>Available</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>ABS</td>
//                     <td>Yes</td>
//                   </tr>
//                   <tr>
//                     <td>Air Conditioning</td>
//                     <td>Automatic Climate Control</td>
//                   </tr>
//                   <tr>
//                     <td>Power Steering</td>
//                     <td>Yes</td>
//                   </tr>
//                   <tr>
//                     <td>Reverse Parking Camera</td>
//                     <td>Yes</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>

//       {/* CTA Section */}
//       <Row className="mt-4 text-center">
//         <Col>
//           <Button variant="primary" size="lg" className="me-2">
//             Contact Seller
//           </Button>
//           <Button variant="secondary" size="lg">
//             Back to Listings
//           </Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProductPage;
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

const ProductPage = () => {
  const { id } = useParams();

  // Temporary hardcoded data (fetch this from the server or state in a real app)
  const featuredProducts = [
    {
      title: 'Renault Triber 2019',
      image: '/images/product1.jpg',
      description: '2019 - 27,764 km - Mint Condition',
      price: 425000,
    },
    {
      title: 'Maruti Suzuki Swift 2021',
      image: '/images/product2.jpg',
      description: '2021 - 29,000 km - Excellent Condition',
      price: 765000,
    },
    {
      title: 'iPhone 13 Refurbished',
      image: '/images/product3.jpg',
      description: 'Latest model, available at a discounted price',
      price: 18000,
    },
    {
      title: 'Hyundai i10 2009',
      image: '/images/car3.jpg',
      description: '2009 - 80,000 km - Well maintained',
      price: 155000,
    },
  ];

  // Get the product details based on the ID
  const product = featuredProducts[id];

  return (
    <>
      <NavBar />
      <Container className="mt-4">
        {product ? (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.title} fluid />
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <h4>Price: ₹{product.price.toLocaleString()}</h4>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ) : (
          <h2>Product not found!</h2>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProductPage;
