import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MovieDetails = () => {
  return (
    <Container>
      <Row className=" justify-content-center">
        <Col xs={6}>
          <Card className="bg-black text-center">
            <Card.Img
              variant="top"
              src={this.props.film.Poster}
              style={{
                width: "100%",
                height: "600px",
                objectFit: "contain",
              }}
            />
            <Card.Body>
              <Card.Title className=" fw-bold fs-1">{this.props.film.Title}</Card.Title>

              <Button variant="outline-light">Watch Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
