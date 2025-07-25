import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const endpoint3 = "https://www.omdbapi.com/?apikey=7e50598d&s=kung-fu-panda";

class Gallery3 extends Component {
  state = {
    movies: [],
  };

  loadMovies = () => {
    fetch(endpoint3)
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
        this.setState({
          movies: datas.Search,
        });
      })
      .catch((err) => {
        console.log("errore caricamento", err);
      });
  };

  componentDidMount() {
    this.loadMovies();
  }

  render() {
    return (
      <div className="gallery-bg">
        <Row className="justify-content-center mt-3">
          {this.state.movies.map((movie) => (
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
                  <Button variant="primary">Start Movie</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Gallery3;
