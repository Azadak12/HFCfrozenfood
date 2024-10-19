
import { Container, Nav, Navbar, NavDropdown, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/bootstrap/css/bootstrap.min.css";
import logo from "../assets/logo-new-e1633071394901.png";
import { CgProfile } from "react-icons/cg";
import finallogo from "../assets/cropped_image.png";
import "../Styles/Mynavbar.css"; 

function Mynavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="bg-dark">
        <Row className="align-items-center" style={{ width: "100%" }}>
          <Col md={2} className="d-flex justify-content-center">
            <Navbar.Brand as={NavLink} to="/">
              <img
                src={finallogo}
                alt="HFC Frozen Food"
                style={{ height: "80px", width: "80px", marginTop: "-0px", marginRight: "20px" }} 
              />
            </Navbar.Brand>
          </Col>
          <Col md={10}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav-links" style={{ gap: "60px", alignItems: "center", marginLeft: "200px" }}>
                <Nav.Link as={NavLink} to="/" exact className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/About" className="text-white">
                  About
                </Nav.Link>
                <NavDropdown title={<span className="text-white">Menu</span>} id="menu-dropdown">
                  <NavDropdown.Item as={NavLink} to="/menu/kofta">
                    Kofta
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/menu/seekh-kabab">
                    Seekh Kabab
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/menu/tikka">
                    Tikka
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/menu/nuggets">
                    Nuggets
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={NavLink} to="/Contact" className="text-white">
                  Contact
                </Nav.Link>
                <Nav.Link className="text-white">
                  <CgProfile style={{ fontSize: "45px", color: "white" }} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
