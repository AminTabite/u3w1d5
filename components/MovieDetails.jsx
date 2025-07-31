import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieDetails = () => {
  const { moviecode } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState({});
  const [comment, setComment] = useState([]);

  const endpointid = `https://www.omdbapi.com/?i=${moviecode}&apikey=e0cf1553`;
  const endpointcomment = `https://striveschool-api.herokuapp.com/api/comments/${moviecode}`;

  const getId = () => {
    fetch(endpointid)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("caricamento id fallito");
        }
      })
      .then((data) => {
        console.log("ecco l'id del film");
        console.log(data);
        setMovies(data);
      })
      .catch((err) => {
        console.log("errore caricamento", err);
      });
  };

  const getComments = () => {
    fetch(endpointcomment, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODc4YWRkNTYzZDk3MTAwMTUwZGY2MWQiLCJpYXQiOjE3NTI3MzkyODUsImV4cCI6MTc1Mzk0ODg4NX0.ksNBhJG5JWfSXzMJhRS54qyWSpL1i7vr38VYsTY0AT8",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("caricamento commenti fallito");
        }
      })
      .then((data) => {
        console.log("commenti?");
        console.log(data);
        setComment(data);
      })
      .catch((err) => {
        console.log("errore caricamento commenti", err);
      });
  };

  useEffect(() => {
    getId();
    getComments();
  }, [moviecode]);

  return (
    <Container>
      <Row className="justify-content-center m-5">
        <Col xs={12} md={6} className="text-center">
          <Card>
            <Card.Img variant="top" src={movies.Poster} />
            <Card.Body>
              <Card.Title>{movies.Title}</Card.Title>
              <Card.Text>{movies.Year}</Card.Text>
              <Card.Text>{movies.Type}</Card.Text>

              <h5 className="mt-4">Commenti</h5>
              {comment.length > 0 ? (
                comment.map((com, index) => (
                  <Card.Text key={index}>• {com.comment}</Card.Text>
                ))
              ) : (
                <Card.Text>Nessun commento disponibile.</Card.Text>
              )}

              <Button
                variant="primary"
                className="mt-3"
                onClick={() => {
                  navigate("/");
                }}>
                Torna in Home
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
