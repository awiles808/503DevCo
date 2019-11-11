import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import styled from 'styled-components';
import fiveothreelogo from '../assets/fiveothreelogo.png';
import { LinkContainer } from 'react-router-bootstrap'


const Styles = styled.div`
  .navbar {
    background-color: ##FFFFFF;
    
    
  }
  .dropdown:hover .dropdown-menu {
    display: block;
}
 
 
  a, .dropdown-toggle {
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
   a, .dropdown, .nav-dropdown,{
    color: #484544;
    font-size: 25px;
    font-weight: 450;

    &:hover {
      color: #134578;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      
    }
  }
.dropdown-toggle::after {
    display:none;
}
`;

export const NavigationBar = () => (
    
    
    <Styles>

        <Navbar expand="lg">
       
            <Navbar.Brand href="/">
                <img
                    src={fiveothreelogo}
                    width="95"
                    height="95"
                    className="d-inline-block align-top"
                    alt=""
                />
            </Navbar.Brand>
            <Navbar.Brand href="Projects">503 Development Co.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                
                    <Nav.Item>
                        
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <LinkContainer to="Projects">
                                <Button>Beginings</Button></LinkContainer>
                                <NavDropdown.Item href="#action/3.2">Where We Are</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Where We Are Headed</NavDropdown.Item>
                            </NavDropdown>
                    </Nav.Item>

                    <Nav.Item>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <LinkContainer to="Projects">
                                <Button>Beginings</Button></LinkContainer>
                            <NavDropdown.Item href="#action/3.2">Where We Are</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Where We Are Headed</NavDropdown.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/team">Team</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/contact">Contact</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/testimonials">Testimonials</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)