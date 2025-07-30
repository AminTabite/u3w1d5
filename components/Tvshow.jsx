import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import comingSoonImage from "../assets/coming-soon.jpg"; // Adatta il percorso relativo se il componente non è in 'src' ma in 'src/components', quindi sarà '../assets/coming-soon.jpg' o './assets/coming-soon.jpg' a seconda della posizione del tuo file JSX

const Tvshow = () => {
  return (
    <Container className="bg-dark ">
      <Row className="justify-content-center">
        <Col xs={6} md={6} lg={6}>
          <Image fluid src={comingSoonImage} className="object-fit-cover" />
        </Col>
      </Row>
    </Container>
  );
};

export default Tvshow;
