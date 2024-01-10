import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";

const MyNav = ({ image, link1, link2, link3, link4, link5, link7 }) => (
  <Navbar expand="lg" className="bg-dark">
    <Container className="text-light">
      <Navbar.Brand href="#home">
        <img src={image} width="100" height="50" className="d-inline-block align-top" alt="React Bootstrap logo" />
      </Navbar.Brand>

      <Navbar.Toggle className="bg-secondary" aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/home" className="link-light btn btn-secondary m-2" href="#link">
            {link1}
          </NavLink>
          <NavLink to="/movie" className="link-light btn btn-secondary m-2" href="#link">
            {link3}
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="link-light" href="#link">
            <Search />
          </Nav.Link>
          <Nav.Link className="link-light" href="#link">
            {link7}
          </Nav.Link>
          <Nav.Link className="link-light" href="#link">
            <Bell />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
