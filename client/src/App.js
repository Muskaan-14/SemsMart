
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';
// import ProductPage from './pages/ProductPage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProductDetails from "./pages/ProductDetails";
// import Profile from './pages/Profile';


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />

//         <Route path="/home" element={<HomePage />} />

//         {/* <Route path="/myorders" element={<MyOrders />} />
//         <Route path="/buy" element={<Buy />} />
//         <Route path="/sell" element={<Sell />} /> */}
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/product/:id" element={<ProductPage />} />
//         <Route path="/product/:id" element={<ProductDetails />} />

//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage'; // New Category Page
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./pages/ProductDetails";
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import AddProduct from './pages/AddProduct';
import ProductDetail from './pages/ProductDetail';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/sell" element={<AddProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        {/* <Route path="/product/:id" element={<ProductPage />} /> */}
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        
        {/* Dynamic Category Routes */}
        <Route path="/home/categories/:id" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
