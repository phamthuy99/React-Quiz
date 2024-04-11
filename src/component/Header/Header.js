import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink className='navbar-brand' to="/">React Quiz</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/users">User</NavLink>
                        <NavLink className='nav-link' to="/admins">Admin</NavLink>
                    </Nav>
                    <Nav>
                        <button className='btn-login'>Login</button>
                        <button className='btn-signup'>Sign up</button>
                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;