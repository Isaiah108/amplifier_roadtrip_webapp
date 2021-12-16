import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

export function NavigationBar() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="Home">
                        Amplifire RoadTrip
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="Login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="Register">
                            Register
                        </Nav.Link>
                        <Nav.Link as={Link} to="Account">
                            Account
                        </Nav.Link>
                        <Nav.Link as={Link} to="Trips">
                            Trips
                        </Nav.Link>
                        <Nav.Link as={Link} to="LogOut">
                            Log Out
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavigationBar;