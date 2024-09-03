import React from 'react'
import { Container } from 'react-bootstrap';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <Navbar expand="lg" className=" pt-4 px-4">

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className='text-dark ' style={{ fontWeight: '500' }} title="Find designers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Designer Search <p style={{ fontSize: '13px' }}>quick find your next designer</p></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Post a job <p style={{ fontSize: '13px' }}>The #1 job board for design talent</p></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='text-dark ms-4' style={{ fontWeight: '500' }} href="#home">Inspiration</Nav.Link>
            <Nav.Link className='text-dark ms-4 ' style={{ fontWeight: '500' }} href="#link">Jobs</Nav.Link>
            <Nav.Link className='text-dark ms-4' style={{ fontWeight: '500' }} href="#link">GoPro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Container className='d-flex justify-content-center'>
          <Navbar.Brand href="#home"style={{paddingLeft:'180px'}}> <img src="https://brandlogos.net/wp-content/uploads/2023/10/dribbble-logo_brandlogos.net_if8uk.png" height={26} width={90} alt="" /> </Navbar.Brand>
        </Container>

        <div className=" h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="searchbar d-flex">
              <a href="#" className="search_icon"><i class="fas fa-search"></i></a>
              <input className="search_input" type="text" name="" placeholder="Search..." />
            </div>
          </div>
        </div>

        <Nav.Link className='text-dark ms-4' style={{ fontWeight: '500' }} href="#link"> <Link style={{textDecoration:'none',color:'black'}} to={'/login'}>Login</Link></Nav.Link>
        <Link to={'/signup'}>
          <button className='text-light btn btn-dark me-3 ms-4 Signupbutton' >Sign up</button>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

      </Navbar >
    </>
  )
}

export default Header