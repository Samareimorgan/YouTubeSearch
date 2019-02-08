import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2> Search Bar Goes Here </h2>
          </Col>
          
        </Row>
        <Row>
          <Col md="9">
            <h2> Video Details go here</h2>
          </Col>
          <Col md="3">
            <h2> Video List goes here</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
