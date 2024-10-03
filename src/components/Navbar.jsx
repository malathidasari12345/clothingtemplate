import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  NavDropdown
} from 'react-bootstrap';
import { BsSearch, BsCart, BsPerson } from 'react-icons/bs'; 
import { IoStorefront } from 'react-icons/io5';
import "../assets/styles/Navbar.css"
const CustomNavbar = () => {
  return (
    <>
      {/* Main Navbar Section */}
      <Navbar expand="lg" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ccc', padding: '10px 0', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <Container fluid>
          {/* Brand Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://ramrajcotton.in/cdn/shop/files/ramraj_logo_155x@2x.jpg?v=1631932971"
              alt="Logo"
              style={{ width: '150px' }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            {/* Search Bar */}
            <Form className={`d-flex mx-auto ${window.innerWidth <= 768 ? 'mobile-margin' : ''}`} style={{ width: '100%', maxWidth: '400px' }}>
  <FormControl
    type="search"
    placeholder="Search..."
    className="me-0"
    aria-label="Search"
    style={{
      border: '1px solid #ccc',
      borderRadius: '5px 0 0 5px',
      marginRight: '0',
    }}
  />
  <Button
    variant="light"
    style={{
      backgroundColor: '#014421',
      color: '#fff',
      borderRadius: '0 5px 5px 0',
      border: '1px solid #ccc',
      marginLeft: '0',
    }}
  >
    <BsSearch size={20} />
  </Button>
</Form>


 {/* Right Side Links */}
<Nav className="ms-auto" style={{ color: '#014421' }}>
  <Nav.Link href="#" style={{ color: '#014421', display: 'flex', alignItems: 'center', marginLeft: '10px' }}> 
    <IoStorefront size={25} style={{ marginRight: '5px' }} /> 
    <span>Stores</span>
  </Nav.Link>

  <Nav.Link href="#" style={{ color: '#014421', display: 'flex', alignItems: 'center', marginLeft: '10px' }}> 
    <BsPerson size={25} style={{ marginRight: '5px' }} /> 
    <span>Login</span>
  </Nav.Link>

  <Nav.Link href="#" className="d-flex align-items-center" style={{ color: '#014421', marginLeft: '10px' }}>
    <BsCart size={25} style={{ marginRight: '5px' }} /> 
    Cart (0)
  </Nav.Link>
</Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Bottom Navigation Links */}
      <Container fluid className="mt-5  bottom-navbar" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #ccc', padding: '10px 0', position: 'fixed', top:5, width: '100%', zIndex: 1000 }}> 
        <Nav className="justify-content-center" style={{ color: 'black', fontWeight: 'bold' }}>
          <NavDropdown title="MEN" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Shirts</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Trousers</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="DHOTIS" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Single Dhoti</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Double Dhoti</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="SHIRTS" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>White Shirts</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Colour Shirts</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="SILK/WEDDING" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Silk</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Wedding Collection</NavDropdown.Item>
          </NavDropdown>
          
          <NavDropdown title="BOYS" id="navbarScrollingDropdown" style={{ color: 'black' }}>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Boys Shirts</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Boys Kurtas</NavDropdown.Item>
          </NavDropdown>

         

          <NavDropdown title="ACCESSROIES" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Bags</NavDropdown.Item>
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Watches</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="ENQUIRY" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Order Enquiry</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="SUPPORT" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>Contact Us</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="CORPORATE INFO" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#" style={{ color: '#014421' }}>About Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
      <hr></hr>
    </>
  );
};

export default CustomNavbar;
