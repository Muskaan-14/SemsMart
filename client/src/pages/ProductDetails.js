// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams(); // Get product ID from URL

//   // Fetch product details using the id (Replace with actual API call)
//   const product = {
//     id: id,
//     name: "Maruti Suzuki Swift 2021",
//     model: "2021",
//     description: "Excellent Condition",
//     price: "₹ 765,000",
//     images: [
//       "/images/swift1.jpg",
//       "/images/swift2.jpg",
//       "/images/swift3.jpg",
//     ],
//   };

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>Model: {product.model}</p>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>

//       {/* Implement Image Carousel */}
//       <div className="carousel">
//         {product.images.map((img, index) => (
//           <img key={index} src={img} alt={`Slide ${index}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Container, Row, Col } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the ID (Replace with actual API call)
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <h2>Loading product details...</h2>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p><strong>Model:</strong> {product.model}</p>
          <p>{product.description}</p>
          <h4 className="text-success">₹ {product.price.toLocaleString()}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
