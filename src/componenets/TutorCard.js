import React, { Component } from 'react';
import { Card, CardText, CardBody, Row, Col,
  CardTitle, CardSubtitle, Button, Alert, 
  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  
class TutorCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      redirect: true
    });
  }

  render() {
    const { img } = this.props;
    return (
      <div>
        <Card>
            <Row style={{marginTop: '20px'}}>
              <Col md="3"><img src={img} alt="Tutor John" 
                style={{marginLeft: '22px'}}/></Col>
              <Col md="6" style={{marginLeft: '10px'}}><CardTitle>John Smith</CardTitle>
            <CardSubtitle>Rating: 4.1</CardSubtitle>
            <CardText>John teaches Math. Please see his schedule below to book a session with John.</CardText></Col>
            </Row>
          <CardBody>
            <Alert style={{backgroundColor: "#E1F7E7"}}>
              <Row>
                <Col md="5">Monday, December 04</Col>
                <Col md="4" style={{textAlign: 'left'}}>2:00pm - 3:00pm</Col>
                <Col md="3"><Button onClick={this.toggle}>Book Now</Button></Col>
              </Row>
            </Alert>
            <Alert color="dark">
              ALREADY BOOKED!
            </Alert>
            <Alert style={{backgroundColor: "#E1F7E7"}}>
              <Row>
                <Col md="5">Wednesday, December 06</Col>
                <Col md="4" style={{textAlign: 'left'}}>6:30pm - 7:30pm</Col>
                <Col md="3"><Button onClick={this.toggle}>Book Now</Button></Col>
              </Row>
            </Alert>
            <Alert color="dark">
              ALREADY BOOKED!
            </Alert>
            <Alert style={{backgroundColor: "#E1F7E7"}}>
              <Row>
                <Col md="5">Friday, December 08</Col>
                <Col md="4" style={{textAlign: 'left'}}>12:00pm - 1:00pm</Col>
                <Col md="3"><Button onClick={this.toggle}>Book Now</Button></Col>
              </Row>
            </Alert>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Success</ModalHeader>
          <ModalBody>You have Booked a tutor session with John. We have sent you a confirmation email. Please continue to make a payment.</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Pay Now</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
};

export default TutorCard;