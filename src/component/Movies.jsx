import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Movie extends Component {
  render() {
    return (
      <Col>
        <Link to={`/details/${this.props.film.imdbID}`}>
          <Card style={{ width: "20rem" }}>
            <img src={this.props.film.Poster} alt={this.props.film.Title} whidth="100" key={this.props.film.imdbID} />
          </Card>
        </Link>
      </Col>
    );
  }
}

export default Movie;
