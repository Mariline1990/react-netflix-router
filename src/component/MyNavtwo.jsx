import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const MyNavTwo = () => (
  <Navbar className="text-light bg-dark" expand="lg">
    <Container>
      <h4>Tv Show </h4>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Dropdown" className="bg-white ms-3" id="basic-nav-dropdown">
            <NavDropdown.Item className="text-dark" href="#action/3.1">
              Action
            </NavDropdown.Item>
            <NavDropdown.Item className="text-dark" href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item className="text-darl" href="#action/3.3">
              Something
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text-darl" href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavTwo;
