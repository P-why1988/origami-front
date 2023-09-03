import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/MySpecialNavbar.css';
import oriLogo from '../Assets/Icons/logo.png';

function MySpecialNavbar() {
    return (
        <Navbar className='ori-navbar bg-body-tertiary'>
            <Navbar.Brand as={ Link } to='/home' className='ori-navbar-brand'>
                <img 
                    src={ oriLogo }
                    alt='Logo Origami'
                    className='ori-logo'
                />Origami
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={ Link } to='/animals'>Animaux</Nav.Link>
                <Nav.Link as={ Link } to='/boxes'>Boîtes</Nav.Link>
                <Nav.Link as={ Link } to='/other'>Autres</Nav.Link>
                <Nav.Link as={ Link } to='/all'>Tous les modèles</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MySpecialNavbar;