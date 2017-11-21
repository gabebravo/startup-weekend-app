import React, { Component } from 'react';
import Header from '../componenets/Header'
import { Row, Col } from 'reactstrap';
import TutorList from '../componenets/TutorList'
import axios from 'axios';

class UserDashboard extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/users')
      .then( result => console.log(result))
  }

  render() {
    return (
      <div>
        <Header link1="/login" anchor1="Profile" link2="/signup1" anchor2="Logout" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="2" />
          <Col xs="12" sm="8" ><TutorList /></Col>
          <Col xs="12" sm="2" />
        </Row>
      </div>
    );
  }
}

export default UserDashboard;

