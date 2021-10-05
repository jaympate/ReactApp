import React from "react"
import Navbar from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'

const Footer = (props) => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
            <Container>
                <div style={{fontSize:"small",color:"white"}}>{'\u00A9'} FS AWS COE</div>
                <Navbar.Text>
                     Made with {'\u2764'} for AWS
                </Navbar.Text>
            </Container>
        </Navbar>
    )
}

export default Footer;
