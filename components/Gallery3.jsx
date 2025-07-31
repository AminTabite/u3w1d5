import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const endpoint1 =
  "https://www.omdbapi.com/?i=tt3896198&apikey=7e50598d&s=kung-fu-panda";
const Gallery1 = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const loadMovies = () => {
    fetch(endpoint1)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("caricamento film fallito");
        }
      })
      .then((datas) => {
        console.log("ecco i risultati dei film");
        console.log(datas);
        setMovies(datas.Search);
      })
      .catch((err) => {
        console.log("errore caricamento", err);
      });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="gallery-bg">
      <Row className="justify-content-center mt-3">
        {movies.map((movie) => (
          <Col className="h-100 g-5" xs={12} md={8} lg={6} key={movie.imdbID}>
            <Card className="Sizecard h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                className="img-fixed"
                src={movie.Poster}
              />
              <Card.Body className="flex-grow-1 d-flex flex-column justify-content-between">
                <div className="">
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Year}</Card.Text>
                  <Card.Text>{movie.Type}</Card.Text>
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    navigate("/movieDetails/" + movie.imdbID);
                  }}>
                  Details{" "}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Gallery1;
