import React from 'react';
import { Nav, Navbar, NavDropdown, Button, Dropdown} from 'react-bootstrap';
import styled from 'styled-components';
import fiveothreelogo from '../assets/fiveothreelogo.png';
import { LinkContainer } from 'react-router-bootstrap'


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
                    <Dropdown>
                            <NavDropdown title="About" id="basic-nav-dropdown">
                                <LinkContainer to="/">
                                <Button>Bottom</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Now We</Button></LinkContainer>
                                <LinkContainer to="/">
                                <Button>Hea</Button></LinkContainer>
                            </NavDropdown>
                        </Dropdown>
                    </Nav.Item>

                    <Nav.Item>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <LinkContainer to="NewBuilds">
                                <Button>New Builds</Button></LinkContainer>
                            <LinkContainer to="AduBuilds">
                                <Button>ADU Builds</Button></LinkContainer>
                            <LinkContainer to="Flips">
                                <Button>Flips</Button></LinkContainer>
                            <LinkContainer to="Projects">
                                <Button>All Projects</Button></LinkContainer>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Team" id="basic-nav-dropdown">
                            <LinkContainer to="Team">
                                <Button>Mike</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Kami</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Jimmy</Button></LinkContainer>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <LinkContainer to="Contact">
                                <Button>Call Us</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Sell Your Home</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Buy From Us</Button></LinkContainer>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        <NavDropdown title="Testimonials" id="basic-nav-dropdown">
                            <LinkContainer to="Testimonials">
                                <Button>New Builds</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Selling Your Home</Button></LinkContainer>
                            <LinkContainer to="/">
                                <Button>Projects</Button></LinkContainer>
                        </NavDropdown>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)