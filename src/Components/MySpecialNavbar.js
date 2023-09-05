import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/MySpecialNavbar.css';
import oriLogo from '../Assets/Icons/logo.png';

function MySpecialNavbar() {

    return (
        <Navbar className='ori-navbar bg-body-tertiary'>
            <Navbar.Brand as={ Link } to='home' className='ori-navbar-brand'>
                <img 
                    src={ oriLogo }
                    alt='Logo Origami'
                    className='ori-logo'
                />Origami
            </Navbar.Brand>
            
            <Nav className="me-auto ori-large-navbar">
                <Nav.Link as={ Link } to='animals'>Animaux</Nav.Link>
                <Nav.Link as={ Link } to='boxes'>Boîtes</Nav.Link>
                <Nav.Link as={ Link } to='other'>Autres</Nav.Link>
                <Nav.Link as={ Link } to='all'>Tout</Nav.Link>
            </Nav>

            <NavDropdown className='ori-collapsed-navbar' title="Lé méniou">
                <NavDropdown.Item as={ Link } to='animals'>Animaux</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to='boxes'>Boîtes</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to='other'>Autres</NavDropdown.Item>
                <NavDropdown.Item as={ Link } to='all'>Tout</NavDropdown.Item>
            </NavDropdown>

        </Navbar>
    );
};

export default MySpecialNavbar;