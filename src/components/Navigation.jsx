import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/" className='text-decoration-none text-dark'> Home </Link>  
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact-us" className='text-decoration-none text-dark'> Contact-Us </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/profile" className='text-decoration-none text-dark'> Profile </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about-us" className='text-decoration-none text-dark'> About-Us </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/products" className='text-decoration-none text-dark'> Products </Link>
          </Nav.Link>

          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigation