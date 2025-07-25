

import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const endpoint1 = "https://www.omdbapi.com/?i=tt3896198&apikey=7e50598d&s=supernatural";

class Gallery1 extends Component {
  state = {
    movies: [],
  };

  loadMovies = () => {
fetch(endpoint1)
.then((response) => {

if(response.ok) {
     return response.json()
} else { 
    throw new Error('caricamento film fallito')
}
})
.then((datas) =>{
    console.log('ecco i risultati dei libri')
    console.log(datas)
    console.log("caricamento dati")
    this.setState({
movies: datas
    })
})
.catch((err) => {
    console.log('errore caricamento',err)
}) 
};



  }

  render() {
    return (
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={8} lg={6}>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Gallery1;
