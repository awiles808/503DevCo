import React  from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavbarBrand } from 'reactstrap';
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
.homebtn.nav-link{
      color: #484544;
    font-size: 25px;
    font-weight: 450;

   
      
    }
    .navbar-light .navbar-nav .nav-link{
         color: #484544;
    font-size: 25px;
    font-weight: 450;
    padding:20px;
    
     &:hover {
      color: #134578;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      
    }
   }
 
 
  a,  .dropdown-toggle.nav-link {
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
    font-weight:900;
    margin:5px;
    
    &:hover {
      color: #134578;
      font-family: "Poppins", sans-serif;
      font-weight: 800;
      
      
    }
  
   }
   
  
.dropdown-toggle::after {
    display:none;
     
    
}

.dropdown-nav-item{
height:25px;
}

`;


export const NavigationBar = () => (

   
        
    <Styles>
        <Headroom>
            <Navbar collapseOnSelect expand="lg">
          
                
       {/* Centering the contents  */}
            <NavbarBrand href="/">
                <img
                    src={fiveothreelogo}
                    width="95"
                    height="95"
                    className="d-inline-block align-top"
                    alt=""
                />
            </NavbarBrand>
            <NavbarBrand href="/">503 Development Company</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                
                <Nav  className="ml-auto">
                        
                    <Nav.Item>
                            <Nav.Link className="homebtn" href="/">Home</Nav.Link>
                    </Nav.Item>


                        <NavDropdown  href='#' title="Projects" id="basic-nav-dropdown"> 
                            <Nav.Item>
                        <Nav.Link href="Restorations">Restorations</Nav.Link>
                </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="AduBuilds">New Construction</Nav.Link>
                 </Nav.Item>
                </NavDropdown>
                    
                
                    <Nav.Item >
                        <NavDropdown  title="Team" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link href="Team">Team</Nav.Link>
                                </Nav.Item>
                        </NavDropdown>
                    </Nav.Item>
                      
                    <Nav.Item>
                        <NavDropdown title="Contact" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link  href="Contact">Sell</Nav.Link>
                        </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="Team">Buy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="https://www.503cash.com/"  >Process</Nav.Link>
                                </Nav.Item>
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Item>
                        {/* <NavDropdown title="Testimonials" id="basic-nav-dropdown">
                                <Nav.Item>
                                    <Nav.Link href="Testimonials">Testimonials</Nav.Link>
                                </Nav.Item>
                            </NavDropdown> */}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Headroom>
    </Styles>
    
)