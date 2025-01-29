// import React, { useState } from 'react';
// import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// const NavBar = ({ onCategorySelect }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All Categories');

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
//           {/* <img
//               src="./images/finallogo.png"
//               alt="Logo"
//               width="40"
//               className="mr-2"
//             /> */}
//             <img
//              src="./images/finallogo.png"
//              alt="Logo"
//              width="125"  // Increase width
//              height="40" // Add height for proper scaling
//              className="mr-2"
//              />

           
//           </Navbar.Brand>
//           <Form inline className="d-flex align-items-center">
            
//             <FormControl
//               type="text"
//               placeholder="Find Cars, Mobile Phones and more..."
//               className="mr-2"
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
//             <Link to="/profile" className="ml-3">
//             <img
//              src="./images/user.jpg"
//              alt="Logo"
//              width="40"  // Increase width
//              height="35" // Add height for proper scaling
//              style={{ marginLeft: "15px" }} 
//              className="mr-2"
//              />
//              <Dropdown>
//               <Dropdown.Toggle variant="light" id="dropdown-categories">
//                 {selectedCategory}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item onClick={() => handleCategorySelect('All Categories')}>All Categories</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             </Link>
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
//                 <Dropdown.Item onClick={() => handleCategorySelect('All Categories')}>All Categories</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('Cars')}>Cars</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('Motorcycles')}>Motorcycles</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('Mobile Phones')}>Mobile Phones</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('For Sale: Houses & Apartments')}>For Sale: Houses & Apartments</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('Scooters')}>Scooters</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('Commercial & Other Vehicles')}>Commercial & Other Vehicles</Dropdown.Item>
//                 <Dropdown.Item onClick={() => handleCategorySelect('For Rent: Houses & Apartments')}>For Rent: Houses & Apartments</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>

//             {/* Render category links */}
//             <Nav.Link onClick={() => handleCategorySelect('Cars')} className="ml-3">
//               Cars
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('Motorcycles')} className="ml-3">
//               Motorcycles
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('Mobile Phones')} className="ml-3">
//               Mobile Phones
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('For Sale: Houses & Apartments')} className="ml-3">
//               For Sale: Houses & Apartments
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('Scooters')} className="ml-3">
//               Scooters
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('Commercial & Other Vehicles')} className="ml-3">
//               Commercial & Other Vehicles
//             </Nav.Link>
//             <Nav.Link onClick={() => handleCategorySelect('For Rent: Houses & Apartments')} className="ml-3">
//               For Rent: Houses & Apartments
//             </Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default NavBar;



import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Form, FormControl, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({ onCategorySelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src="./images/finallogo.png"
              alt="Logo"
              width="125"
              height="40"
              className="mr-2"
            />
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
            {/* Language Dropdown */}
            <Dropdown className="mr-3">
              <Dropdown.Toggle variant="outline-light" id="dropdown-language">
                English
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* User Profile Image and Dropdown */}
            <div className="d-flex align-items-center">
              <img
                src="./images/user.jpg"
                alt="User"
                width="40"
                height="35"
                style={{ marginLeft: "15px", marginRight:"1px" }}
              />

              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-profile" style={{ padding: '2px 10px', fontSize: '20px', height: '30px',  border: 'none', background: 'transparent', boxShadow: 'none' }}>
                 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/buy">Buy</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/sell">Sell</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Categories Navbar */}
      <Navbar bg="light" variant="light" className="py-2 border-top">
        <Container>
          <Nav className="w-100">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-categories">
                All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => onCategorySelect('Cars')}>Cars</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('Motorcycles')}>Motorcycles</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('Mobile Phones')}>Mobile Phones</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('For Sale: Houses & Apartments')}>For Sale: Houses & Apartments</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('Scooters')}>Scooters</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('Commercial & Other Vehicles')}>Commercial & Other Vehicles</Dropdown.Item>
                <Dropdown.Item onClick={() => onCategorySelect('For Rent: Houses & Apartments')}>For Rent: Houses & Apartments</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Render category links */}
            <Nav.Link onClick={() => onCategorySelect('Cars')} className="ml-3">
              Cars
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('Motorcycles')} className="ml-3">
              Motorcycles
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('Mobile Phones')} className="ml-3">
              Mobile Phones
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('For Sale: Houses & Apartments')} className="ml-3">
              For Sale: Houses & Apartments
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('Scooters')} className="ml-3">
              Scooters
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('Commercial & Other Vehicles')} className="ml-3">
              Commercial & Other Vehicles
            </Nav.Link>
            <Nav.Link onClick={() => onCategorySelect('For Rent: Houses & Apartments')} className="ml-3">
              For Rent: Houses & Apartments
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
