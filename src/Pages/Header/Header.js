import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseFirebase from '../../Hooks/UseFirebase';

const Header = () => {
    const{user,logOut}=UseFirebase()
    return (
        <div>
            {/* navbar///================ */}
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" fixed="top">
              <Container>
                 <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to ='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to ='/OurDoctors'>Doctors</Nav.Link>
                        <Nav.Link as={Link} to ='/AboutUs'>AboutUs</Nav.Link>
                        {
                        user.displayName?<Navbar.Text>
                            {user.displayName}
                            <button onClick={logOut}>LogOut</button>
                          </Navbar.Text>
                          :
                            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                         }
                            
                        </Navbar.Collapse>
                
                </Container>
            </Navbar>

            {/* baner======================= */}
            <div className="banner row" >
                <div className="col-md-6 col-sm-4">

                </div>

                <div className="baner-txt col-md-6 col-sm-8">
                <h3>Your Health is our priority</h3>
                <h1>MediCare Helth Service</h1>
                <h5>It is the great opportunity to receive high-Quality medical help</h5>
                </div>
            </div>
        </div>
    );
};

export default Header;