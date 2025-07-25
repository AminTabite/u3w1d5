import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={6} className="text-center">
            <Row>
              <Col className="mb-2">
                <i className="bi bi-facebook footer-icon me-2" />
                <i className="bi bi-instagram footer-icon me-2" />
                <i className="bi bi-twitter-x footer-icon me-2" />
                <i className="bi bi-youtube footer-icon" />
              </Col>
            </Row>
            <Row xs={1} sm={2} md={4} lg={4}>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#">Media Center</a>
                  </p>
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Audio Description</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                </div>
              </Col>
              <Col>
                <div className="footer-links">
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="footer-button rounded-0 mt-3">
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mb-2 mt-2 copyright">
                © 1997-2023 Netflix, Inc.
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
