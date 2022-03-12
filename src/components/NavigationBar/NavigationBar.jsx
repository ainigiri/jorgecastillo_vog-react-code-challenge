import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Vog React Challenge</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="universities">Universities</Nav.Link>
                    <Nav.Link href="postal">Postal lookup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;