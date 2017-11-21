import React, { Component } from 'react';
import Header from '../componenets/Header'
import { Container, Row, Col } from 'reactstrap';

class HomePage extends Component {

  render() {
    return (
      <div>
        <Header link1="/login" anchor1="Login" link2="/signup1" anchor2="Signup" />
        <Container>
          <Row style={{ paddingTop: '20vh' }}>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;

