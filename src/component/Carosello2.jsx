import { Component } from "react";
import Movie from "./Movies";
import { Container, Row } from "react-bootstrap";

class Carosello2 extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      const resp = await fetch("http://www.omdbapi.com/?apikey=d8f366cd&s=Avengers");
      if (resp.ok) {
        const moviesObj = await resp.json();

        console.log("FETCHED", moviesObj.Search);

        this.setState({ movies: moviesObj.Search });
      }
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <Container style={{ justifyContent: "space-between", display: "flex" }}>
        <Row style={{ alignItems: "center" }}>
          {this.state.movies.map((film, i) => (
            <Movie key={`movies-${i}`} film={film} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Carosello2;
