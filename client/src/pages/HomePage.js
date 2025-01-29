// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import NavBar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';


// const HomePage = () => {
//   const featuredProducts = [
//     { title: 'Product 1', image: '/images/product1.jpg', price: 100 },
//     { title: 'Product 2', image: '/images/product2.jpg', price: 200 },
//     { title: 'Product 3', image: '/images/product3.jpg', description:'Swift car for sell',price: 300 },
//   ];

  

//   return (
//     <>
//       <NavBar />
//       <Container className="mt-4">
//         {/* Carousel */}
//         <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/slide1.jpg" alt="First slide" />
//             <Carousel.Caption>
//               <h3>Featured Product 1</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/slide3.jpg" alt="Second slide" />
//             <Carousel.Caption>
//               <h3>Featured Product 2</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>

        
        
//         {/* Product Cards */}
//         <h2>Featured Products</h2>
//         <Row>
//           {featuredProducts.map((product, index) => (
//             <Col key={index} md={4}>
//               <ProductCard title={product.title} image={product.image} price={product.price} />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default HomePage;
// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import NavBar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';

// const HomePage = () => {
//   const featuredProducts = [
//     {
//       title: 'Renault Triber 2019',
//       image: '/images/product1.jpg',
//       description: '2019 - 27,764 km - Mint Condition',
//       price: 425000,
//     },
//     {
//       title: 'Maruti Suzuki Swift 2021',
//       image: '/images/product2.jpg',
//       description: '2021 - 29,000 km - Excellent Condition',
//       price: 765000,
//     },
//     {
//       title: 'iPhone 13 Refurbished',
//       image: '/images/product3.jpg',
//       description: 'Latest model, available at a discounted price',
//       price: 18000,
//     },
//     {
//       title: 'Hyundai i10 2009',
//       image: '/images/car3.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'Home i10 2009',
//       image: '/images/home.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'watch i10 2009',
//       image: '/images/watch.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'Home i10 2009',
//       image: '/images/fridge.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//   ];

//   return (
//     <>
//       <NavBar />
//       <Container className="mt-4">
//         {/* Carousel */}
//         <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/SEMSMART.png" alt="First slide" />
//             <Carousel.Caption>
//               <h3>Featured: Renault Triber 2019</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/semsmart2.png" alt="First slide" />
//             <Carousel.Caption>
//               <h3>Featured: Renault Triber 2019</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/SEMSMART.png" alt="Second slide" />
//             <Carousel.Caption>
//               <h3>Featured: Maruti Suzuki Swift 2021</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
          
//         </Carousel>

//         {/* Product Cards */}
//         <h2 className="mt-4">Featured Products</h2>
//         <Row>
//           {featuredProducts.map((product, index) => (
//             <Col key={index} md={4}>
//               <ProductCard
//                 title={product.title}
//                 image={product.image}
//                 description={product.description}
//                 price={product.price}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default HomePage;
// import React from 'react';
// import { Container, Row, Col, Carousel } from 'react-bootstrap';
// import NavBar from '../components/Navbar'; // Import Navbar
// import ProductCard from '../components/ProductCard'; // Import ProductCard
// import Footer from '../components/Footer'; // Import Footer

// const HomePage = () => {
//   const featuredProducts = [
//     {
//       title: 'Renault Triber 2019',
//       image: '/images/product1.jpg',
//       description: '2019 - 27,764 km - Mint Condition',
//       price: 425000,
//     },
//     {
//       title: 'Maruti Suzuki Swift 2021',
//       image: '/images/product2.jpg',
//       description: '2021 - 29,000 km - Excellent Condition',
//       price: 765000,
//     },
//     {
//       title: 'iPhone 13 Refurbished',
//       image: '/images/product3.jpg',
//       description: 'Latest model, available at a discounted price',
//       price: 18000,
//     },
//     {
//       title: 'Hyundai i10 2009',
//       image: '/images/car3.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'Home i10 2009',
//       image: '/images/home.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'Watch i10 2009',
//       image: '/images/watch.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//     {
//       title: 'Fridge i10 2009',
//       image: '/images/fridge.jpg',
//       description: '2009 - 80,000 km - Well maintained',
//       price: 155000,
//     },
//   ];

//   return (
//     <>
//       <NavBar />
//       <Container className="mt-4">
//         {/* Carousel */}
//         <Carousel>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/SEMSMART.png" alt="First slide" />
//             <Carousel.Caption>
//               <h3>Featured: Renault Triber 2019</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/semsmart2.png" alt="Second slide" />
//             <Carousel.Caption>
//               <h3>Featured: Maruti Suzuki Swift 2021</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src="/images/SEMSMART.png" alt="Third slide" />
//             <Carousel.Caption>
//               <h3>Featured: Hyundai i10 2009</h3>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>

//         {/* Product Cards */}
//         <h2 className="mt-4">Featured Products</h2>
//         <Row>
//           {featuredProducts.map((product, index) => (
//             <Col key={index} md={4}>
//               <ProductCard
//                 title={product.title}
//                 image={product.image}
//                 description={product.description}
//                 price={product.price}
//               />
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Footer Component */}
//       <Footer />
//     </>
//   );
// };

// export default HomePage;
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import NavBar from '../components/Navbar'; 
import ProductCard from '../components/ProductCard'; 
import Footer from '../components/Footer'; 

const HomePage = () => {
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
    {
      title: 'Home Decor Package',
      image: '/images/home.jpg',
      description: 'Stylish and modern decor at an affordable price',
      price: 155000,
    },
    {
      title: 'Premium Watch',
      image: '/images/watch.jpg',
      description: 'Timeless design with exceptional quality',
      price: 155000,
    },
    {
      title: 'Luxury Fridge',
      image: '/images/fridge.jpg',
      description: 'Energy-efficient, stylish, and spacious',
      price: 155000,
    },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <Container className="mt-4">
        {/* Carousel Section */}
        <Carousel className="mb-4">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/SEMSMART.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Featured: Renault Triber 2019</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/semsmart2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Featured: Maruti Suzuki Swift 2021</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/SEMSMART.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Featured: Hyundai i10 2009</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Product Cards Section */}
        <h2 className="mt-4 mb-3">Featured Products</h2>
        <Row>
          {featuredProducts.map((product, index) => (
            <Col key={index} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;
