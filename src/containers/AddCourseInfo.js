import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCourseData } from '../actions'
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Button, Form, FormGroup, Label, 
  Input, Row, Col, Modal, ModalHeader, ModalBody, 
  ModalFooter} from 'reactstrap';
import Header from '../componenets/Header';

class AddCourseInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      courses: [],
      redirect: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      redirect: false
    })
  }

  getCheckboxValues = (e) => {
    if(e.target.checked){
      const coursesCopy = [...this.state.courses, e.target.id]
      this.setState({
        courses: coursesCopy
      })
    } else {
      const coursesCopy = [...this.state.courses].filter( course => course !== e.target.id)
      this.setState({
        courses: coursesCopy
      })
    }
  }

  handleSubmission = (e) => {
    e.preventDefault();
    const { courses } = this.state
    const newUserInfo = {...this.props.signupData, courses}
    axios.post('http://localhost:3001/users', newUserInfo)
    .then(function (response) {
      console.log(response);
    });
    this.setState({
      courses: [],
      modal: true
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      redirect: true
    });
  }

  render() {
    const redirect = this.state.redirect ?  <Redirect to="/userdash"/> : '';
    return (
      <div>
      {redirect}
        <Header link1="/login" anchor1="Login" link2="/signup1" anchor2="Signup" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="4" />
          <Col xs="12" sm="4" >
            <Form onSubmit={this.handleSubmission}>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Pre-Algebra"
                  onChange={this.getCheckboxValues}/> Pre-Algebra
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Algebra I" 
                  onChange={this.getCheckboxValues}/> Algebra I
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Geometery"
                  onChange={this.getCheckboxValues}/> Geometery
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Earth Science"
                  onChange={this.getCheckboxValues}/> Earth Science
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Life Science" 
                  onChange={this.getCheckboxValues}/> Life Science
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Geology"
                  onChange={this.getCheckboxValues}/> Geology
                </Label>
              </FormGroup>
              <Button style={{marginTop: '1rem', marginRight: '1rem', width: '6rem'}}>Submit</Button>
              <Button style={{marginTop: '1rem', width: '6rem'}}>Back</Button>
            </Form>
          </Col>
          <Col xs="12" sm="4" />
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Congrats</ModalHeader>
          <ModalBody>You have sucessfully registered at Tutorfy. We have sent you a confirmation email. You will now be able to see tutors that match based on your criteria.</ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = ({ signupData }) => ({ signupData })
const mapDispatchToProps = { addCourseData }
export default connect(mapStateToProps, mapDispatchToProps)(AddCourseInfo)

