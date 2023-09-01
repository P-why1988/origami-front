import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/MySpecialNavbar.css';

function MySpecialNavbar() {
    return (
        <Navbar className='ori-navbar bg-body-tertiary'>
            <Navbar.Brand as={ Link } to='/home'>Origami</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={ Link } to='/animals'>Animaux</Nav.Link>
                <Nav.Link as={ Link } to='/boxes'>Boîtes</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MySpecialNavbar;