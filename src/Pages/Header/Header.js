import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import UseFirebase from '../../Hooks/UseFirebase';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    // const {users}=props;
    
    const{user,logOut}=UseFirebase();
    return (
        <div className="heading-page">
            {/* navbar///================ */}
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" fixed="top">
              <Container>
                 <Navbar.Brand className="brandNav" href="#home"><img className="logo" src="https://i.ibb.co/C8HN2qk/medilogo.png" alt="" /> <h1>MediCare</h1></Navbar.Brand>
               
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to ='/Home'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to ='/OurDoctors#OurDoctors'>Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to ='/AboutUs#AboutUs'>AboutUs</Nav.Link>
                        {
                        user.displayName?<Navbar.Text>
                            {user.displayName}
                            <button className='ms-2 bg-warning logOut' onClick={logOut}><i className="fas fa-sign-out-alt logOut-icon"></i></button>
                          </Navbar.Text>
                          :
                            <Nav.Link as={HashLink} to="/Login">Login</Nav.Link>
                         }
                            
                        </Navbar.Collapse>
                
                </Container>
            </Navbar>

            {/* baner======================= */}
            < div className="">
              <div className="banner row">
                <div className="col-md-6 col-sm-4">

                </div>

                <div className="baner-txt col-md-6 col-sm-8 ">
                <h3>Your Health is our priority</h3>
                <h1 className="heading">MediCare Helth Service</h1>
                <h5>It is the great opportunity to receive high-Quality medical help</h5>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;