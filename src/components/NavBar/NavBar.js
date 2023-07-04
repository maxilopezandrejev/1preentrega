import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../../../src/components/NavBar/CartWidget/CartWidget';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MaxiStore</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Remeras</Nav.Link>
            <Nav.Link href="#features">Zapatillas</Nav.Link>
            <Nav.Link href="#features">Gorras</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#pricing">
              <CartWidget/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default NavBar;