// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './pages/HomePage';
//  import LoginPage from './pages/LoginPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
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
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page as the default route */}
        <Route path="/" element={<LoginPage />} />

        {/* Homepage at /home */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
};

export default App;
