import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import { VideoList, VideoListItem } from "./components/VideoList";

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <SearchBar />
          </Col>
          
        </Row>
        <Row>
          <Col md="9">
            <VideoDetail />
          </Col>
          <Col md="3">
            <VideoList> 
              <VideoListItem />
            </VideoList>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
