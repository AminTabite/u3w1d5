import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  BsGrid3X3,
  BsGrid,
  BsSearch,
  BsBell,
  BsPersonCircle,
} from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <Navbar expand="lg" className="bg-dark text-light">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              className="img-fluid"
              style={{ width: "100px" }}
              src="../assets/logo.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ borderColor: "white" }}
            aria-controls="navbarScroll"
            className="text-white"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <Link
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
                to="/">
                Home
              </Link>
              <Link
                className={
                  location.pathname === "/tvShow"
                    ? "nav-link active"
                    : "nav-link"
                }
                to="/tvShow">
                TvShow
              </Link>
            </Nav>
            <Form className="d-flex ">
              <div className="d-flex align-items-center px-2 ">
                <BsSearch className="icons positioning" />
                <div id="kids" className="fw-bold">
                  KIDS
                </div>
                <BsBell className="icons positioning" />
                <BsPersonCircle className="icons positioning" />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark text-light">
        <Row className="d-flex justify-content-between ">
          <Col xs={2} lg={3}>
            <div className="d-flex">
              <h2 style={{ margin: 0, padding: 0 }}>TV SHOWS</h2>
              <NavDropdown
                className="positioning"
                title="Genres"
                id="basic-nav-dropdown"
                style={{
                  border: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent",
                  paddingLeft: "10px",
                }}>
                <NavDropdown.Item
                  as={Link}
                  to="/gallery-one"
                  active={location.pathname === "/gallery-one"}>
                  Gallery 1
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/gallery-two"
                  active={location.pathname === "/gallery-one"}>
                  Gallery 2
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/gallery-three"
                  active={location.pathname === "/gallery-one"}>
                  Gallery 3
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </div>
          </Col>
          <Col xs={2} lg={3}>
            {" "}
            <div>
              <BsGrid3X3 color="white" className="positioning" />
              <BsGrid color="white" className="positioning" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
