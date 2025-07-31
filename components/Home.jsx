import React from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h1 className="text-center m-4 fw-bold text-danger">
        WELCOME ON OUR SITE, THESE ARE THE AVAILABLE CATEGORIES OF MOVIES
      </h1>
      <Container>
        <Row className="justify-content-center m-2">
          <Col className="h-100 g-5" xs={6} md={6} lg={6}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
