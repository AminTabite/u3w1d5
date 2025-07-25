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

const header = () => {
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Tv Shows</Nav.Link>
              <Nav.Link href="#action2">Movies</Nav.Link>
              <Nav.Link href="#action2">Recently Added</Nav.Link>
              <Nav.Link href="#action2">My List</Nav.Link>
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
                <NavDropdown.Item href="#action/3.1">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Action</NavDropdown.Item>
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

export default header;
