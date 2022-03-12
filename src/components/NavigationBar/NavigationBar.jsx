import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
    let navigate = useNavigate();

    const goToRoute = (route) => {
        navigate(route);
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" onClick={() => goToRoute("/")}>Vog React Challenge</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="/" onClick={() => goToRoute("/")}>Home</Nav.Link>
                    <Nav.Link href="universities" onClick={() => goToRoute("/universities")}>Universities</Nav.Link>
                    <Nav.Link href="postal" onClick={() => goToRoute("/postal")}>Postal lookup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;