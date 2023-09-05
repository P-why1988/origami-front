import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/MySpecialNavbar.css';
import oriLogo from '../Assets/Icons/logo.png';

function MySpecialNavbar() {
    function url(link) {
        return 'origami-front/' + link;
    }

    return (
        <Navbar className='ori-navbar bg-body-tertiary'>
            <Navbar.Brand as={ Link } to={ url('home') } className='ori-navbar-brand'>
                <img 
                    src={ oriLogo }
                    alt='Logo Origami'
                    className='ori-logo'
                />Origami
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={ Link } to={ url('animals') }>Animaux</Nav.Link>
                <Nav.Link as={ Link } to={ url('boxes') }>Boîtes</Nav.Link>
                <Nav.Link as={ Link } to={ url('other') }>Autres</Nav.Link>
                <Nav.Link as={ Link } to={ url('all') }>Tout</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MySpecialNavbar;