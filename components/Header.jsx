import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { BsGrid3X3, BsGrid } from "react-icons/bs";

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
          <Navbar.Toggle aria-controls="navbarScroll" />
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
            <Form className="d-flex">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-search icons"></i>
                <div id="kids" className="fw-bold">
                  KIDS
                </div>
                <i className="bi bi-bell icons"></i>
                <i className="bi bi-person-circle icons"></i>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="d-flex justify-content-between mt-5">
          <Col xs={2} lg={3}>
            <div className="d-flex">
              <h2 className="">TV SHOWS</h2>{" "}
              <NavDropdown title="Genres" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Col>
          <Col xs={2} lg={3}>
            {" "}
            <div>
              <BsGrid3X3 color="white" />
              <BsGrid color="white" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default header;
