import React from 'react';
import { Nav, Navbar, NavDropdown,  } from 'react-bootstrap';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import fiveothreelogo from '../assets/fiveothreelogo.png';
// import { LinkContainer } from 'react-router-bootstrap';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'reactstrap';




const Styles = styled.div`


  .navbar {
    background-color: #FFFFFF;
    
    
  }
  .dropdown:hover .dropdown-menu {
    display: block;
    
}
 
 
  a,  .dropdown-toggle {
    color: #484544;
    font-size: 25px;
    font-weight: 450;

    &:hover {
      color: #134578;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      
    }

  }
   .navbar-brand, .navbar-nav  {
    color: #484544;
    font-size: 35px;
    font-weight:800;
    
    &:hover {
      color: #134578;
      font-family: "Poppins", sans-serif;
      font-weight: 800;
      
      
    }
    
   }
 
 
  
.dropdown-toggle::after {
    display:none;
}
`;

export const NavigationBar = () => (
    
    
    <Styles>
        <Headroom>
        <Navbar expand="lg">
       {/* Centering the contents  */}
            <Navbar.Brand href="/">
                <img
                    src={fiveothreelogo}
                    width="95"
                    height="95"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Brand href="/">503 Development Co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav  className="ml-auto">
                        
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>


                <NavDropdown href="Restorations" title="Projects" id="basic-nav-dropdown">
                    <Nav.Item>
                        <Nav.Link href="Restorations">Restorations</Nav.Link>
                </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="AduBuilds">ADU Builds</Nav.Link>
                 </Nav.Item>
                </NavDropdown>
                    
                
                    <Nav.Item >
                        <NavDropdown title="Team" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link href="Team">Team</Nav.Link>
                                </Nav.Item>
                        </NavDropdown>
                    </Nav.Item>
                      
                    <Nav.Item>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link href="Contact">Sell</Nav.Link>
                        </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="Team">Buy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://www.503cash.com/" target="_blank" >Process</Nav.Link>
                                </Nav.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Testimonials" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link href="Testimonials">Testimonials</Nav.Link>
                                </Nav.Item>
                            </NavDropdown>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Headroom>
    </Styles>
)