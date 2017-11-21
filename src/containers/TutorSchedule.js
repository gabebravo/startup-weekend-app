import React, { Component } from 'react';
import Header from '../componenets/Header';
import TutorCard from '../componenets/TutorCard';
import { Row, Col } from 'reactstrap';
import axios from 'axios';

class TutorSchedule extends Component {

  componentDidMount() {
    axios.get('http://localhost:3001/users')
      .then( result => console.log(result))
  }

  render() {
    return (
      <div>
        <Header link1="/login" anchor1="Profile" link2="/signup1" anchor2="Logout" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="3" />
          <Col xs="12" sm="6" >
            <TutorCard 
              img="../images/tutor1.jpg"
            />
          </Col>
          <Col xs="12" sm="3" />
        </Row>
      </div>
    );
  }
}

export default TutorSchedule;

