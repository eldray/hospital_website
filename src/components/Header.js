import { Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import SearchInput from './SearchInput';
import logo from './images/logo.png'


function Header() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} height={60} width={180} alt='logo' className="logo"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              
                <Nav className=" custom-nav-link text-uppercase w-75 justify-content-center flex-grow-1 pe-1">
                  <Nav.Link className="text-color" href="/">Home</Nav.Link>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/Services">Gen OPD</NavDropdown.Item>
                    <NavDropdown.Item href="/doctors">Specialist Doctors</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <div className="mr-2">
          <SearchInput/>
          </div>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
