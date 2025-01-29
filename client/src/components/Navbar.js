import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Notify the parent about the selected category
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
              src="./images/Secure_logo.jpg"
              alt="Logo"
              width="40"
              className="mr-2"
            />
            SEMSMART
          </Navbar.Brand>
          <Form inline className="d-flex align-items-center">
            
            <FormControl
              type="text"
              placeholder="Find Cars, Mobile Phones and more..."
              className="mr-2"
            />
            <Button variant="outline-light" className="mr-2">
              Search
            </Button>
           
          </Form>
          <Nav className="ml-auto d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-language">
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to="/" className="ml-3">
              <Button variant="primary">Login</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Categories Navbar */}
      <Navbar bg="light" variant="light" className="py-2 border-top">
        <Container>
          <Nav className="w-100">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-categories">
                {selectedCategory}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleCategorySelect('All Categories')}>All Categories</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Cars')}>Cars</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Motorcycles')}>Motorcycles</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Mobile Phones')}>Mobile Phones</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('For Sale: Houses & Apartments')}>For Sale: Houses & Apartments</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Scooters')}>Scooters</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('Commercial & Other Vehicles')}>Commercial & Other Vehicles</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCategorySelect('For Rent: Houses & Apartments')}>For Rent: Houses & Apartments</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Render category links */}
            <Nav.Link onClick={() => handleCategorySelect('Cars')} className="ml-3">
              Cars
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('Motorcycles')} className="ml-3">
              Motorcycles
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('Mobile Phones')} className="ml-3">
              Mobile Phones
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('For Sale: Houses & Apartments')} className="ml-3">
              For Sale: Houses & Apartments
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('Scooters')} className="ml-3">
              Scooters
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('Commercial & Other Vehicles')} className="ml-3">
              Commercial & Other Vehicles
            </Nav.Link>
            <Nav.Link onClick={() => handleCategorySelect('For Rent: Houses & Apartments')} className="ml-3">
              For Rent: Houses & Apartments
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;











// import React, { useState } from "react";
// import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown, Image } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const NavBar = ({ isLoggedIn, onCategorySelect, userProfile }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     onCategorySelect(category); // Notify the parent about the selected category
//   };

//   return (
//     <>
//       {/* Top Navbar */}
//       <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
//         <Container>
//           <Navbar.Brand href="/" className="d-flex align-items-center">
//             <img
//               src="./images/Secure_logo.jpg"
//               alt="Logo"
//               width="40"
//               className="mr-2"
//             />
//             SEMSMART
//           </Navbar.Brand>
//           <Form inline className="d-flex align-items-center">
//             <FormControl
//               type="text"
//               placeholder="Find Cars, Mobile Phones and more..."
//               className="mr-2"
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <Button variant="outline-light" className="mr-2">
//               Search
//             </Button>
//           </Form>
//           <Nav className="ml-auto d-flex align-items-center">
//             <Dropdown>
//               <Dropdown.Toggle variant="outline-light" id="dropdown-language">
//                 English
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item>English</Dropdown.Item>
//                 <Dropdown.Item>Hindi</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             {!isLoggedIn ? (
//               <Link to="/login" className="ml-3">
//                 <Button variant="primary">Login</Button>
//               </Link>
//             ) : (
//               <Dropdown align="end">
//                 <Dropdown.Toggle variant="outline-light" className="ml-3">
//                   <Image
//                     src={userProfile?.avatar || "./images/default-profile.png"}
//                     alt="User Avatar"
//                     roundedCircle
//                     width="30"
//                     height="30"
//                   />
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item>My Profile</Dropdown.Item>
//                   <Dropdown.Item>Settings</Dropdown.Item>
//                   <Dropdown.Item>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             )}
//           </Nav>
//         </Container>
//       </Navbar>

//       {/* Categories Navbar */}
//       <Navbar bg="light" variant="light" className="py-2 border-top">
//         <Container>
//           <Nav className="w-100">
//             <Dropdown>
//               <Dropdown.Toggle variant="light" id="dropdown-categories">
//                 {selectedCategory}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => handleCategorySelect("All Categories")}>
//                   All Categories
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("Cars")}>Cars</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("Motorcycles")}>
//                   Motorcycles
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("Mobile Phones")}>
//                   Mobile Phones
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("For Sale: Houses & Apartments")}>
//                   For Sale: Houses & Apartments
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("Scooters")}>Scooters</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("Commercial & Other Vehicles")}>
//                   Commercial & Other Vehicles
//                 </Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect("For Rent: Houses & Apartments")}>
//                   For Rent: Houses & Apartments
//                 </Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>

//             {/* Render category links */}
//             <Nav.Link onClick={() => handleCategorySelect("Cars")} className="ml-3">
//               Cars
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect("Motorcycles")} className="ml-3">
//               Motorcycles
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect("Mobile Phones")} className="ml-3">
//               Mobile Phones
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleCategorySelect("For Sale: Houses & Apartments")}
//               className="ml-3"
//             >
//               For Sale: Houses & Apartments
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect("Scooters")} className="ml-3">
//               Scooters
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect("Commercial & Other Vehicles")} className="ml-3">
//               Commercial & Other Vehicles
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleCategorySelect("For Rent: Houses & Apartments")}
//               className="ml-3"
//             >
//               For Rent: Houses & Apartments
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavBar;
