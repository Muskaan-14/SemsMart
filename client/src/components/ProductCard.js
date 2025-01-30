// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ProductCard = ({ title, image, description, price }) => {
//   return (
//     <Card className="mb-4 shadow-sm">
//       <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <h5 className="text-success">₹ {price}</h5>
//         <Button variant="primary">View Details</Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ProductCard = ({ title, image, description, price, onButtonClick }) => {
//   return (
//     <Card className="mb-4 shadow-sm">
//       <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <h5 className="text-success">₹ {price.toLocaleString()}</h5>
//         <Button variant="primary" onClick={() => onButtonClick(title, description, price)}>
//           View Details
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;
// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ProductCard = ({ title, image, description, price }) => {
//   const handleButtonClick = () => {
//     // Example action: Display product details in an alert
//     alert(`Product Details:\n\nTitle: ${title}\nDescription: ${description}\nPrice: ₹ ${price.toLocaleString()}`);
//   };

//   return (
//     <Card className="mb-4 shadow-sm">
//       <Card.Img variant="top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>{description}</Card.Text>
//         <h5 className="text-success">₹ {price.toLocaleString()}</h5>
//         <Button variant="primary" onClick={handleButtonClick}>
//           View Details
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };

// export default ProductCard;
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, image, description, price }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5 className="text-success">₹ {price.toLocaleString()}</h5>
        <Link to={`/product/242322`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
