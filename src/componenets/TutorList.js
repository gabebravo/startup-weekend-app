import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Tutor from './Tutor';
import { getTutors } from '../api/routes';

class TutorList extends Component {

  state = {
    tutors: []
  }

  componentDidMount() {
    getTutors()
      .then( tutors => {
        this.setState({ tutors })
      })
  }

  getTutors = arr => {
    return arr.map( (tutor, index) => {
      return <Tutor 
        key={index}
        id={tutor.id}
        img={tutor.img}
        name={tutor.name} 
        rating={tutor.rating} 
        match={tutor.courses} />
    })
  }

  render() {
    let activeTutors = this.state.tutors.length > 0 ? 
      this.getTutors(this.state.tutors):
      `Let's get cracking and add some todos`;

    return (
      <Container>
        <Row>
          <Col><h3>Matching Tutors:</h3>{activeTutors}</Col>
        </Row>
      </Container>
    );
  }
}

export default TutorList;