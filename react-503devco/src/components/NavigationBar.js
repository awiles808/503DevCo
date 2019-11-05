import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import fiveothreelogo from '../assets/fiveothreelogo.png'

const Styles = styled.div`
  .navbar {
    background-color: ##FFFFFF;
    
    
  }
 
 
  a, .nav-link{
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
    .navbar-toggle, .navbar-collapse{
      color:#2dca98;
    }
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
            <Navbar.Brand href="/">503 Development Co.</Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/">About</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/projects">Projects</Link>
                        </Nav.Link>
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles >
)