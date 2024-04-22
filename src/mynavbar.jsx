import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const TopNavbar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div className="d-flex justify-content-center">
            <Navbar.Brand href="#home" className="text-uppercase ">Home</Navbar.Brand>
            <Nav className="me-auto">

            <NavDropdown title="pages" id="nav-dropdown" className="text-uppercase">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Dropdown" id="nav-dropdown" className="text-uppercase">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="pricing" id="nav-dropdown" className="text-uppercase">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#pricing" className="text-uppercase">Link text</Nav.Link>
              <Nav.Link href="#pricing" className="text-uppercase">Link text</Nav.Link>
              <Nav.Link href="#pricing" className="text-uppercase">Link text</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
