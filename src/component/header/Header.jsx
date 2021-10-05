import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



const Header = (props) => {
    return (
       
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">CoE Hackathon</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="mailto: aditya.chaphekar@capgemini.com">Contact Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
