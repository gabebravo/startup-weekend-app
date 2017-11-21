import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudentData } from '../actions'
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, 
  Input, Row, Col } from 'reactstrap';
import Header from '../componenets/Header';

class AddStudentInfo extends Component {

  state = {
    student: '', level: '', grade: '', subjects: [], redirect: false
  }

  componentWillUnmount() {
    this.setState({
      redirect: false
    })
  }

  getFieldData = (e) => {
    switch( e.target.id ) {
      case "student" :
        this.setState({
          student: e.target.value
        })
        break;
      case "level" :
        this.setState({
          level: e.target.value
        })
        break;
      case "grade" :
        this.setState({
          grade: e.target.value
        })
        break;
      default:
        break;
    }
  }

  getCheckboxValues = (e) => {
    if(e.target.checked){
      const subjectsCopy = [...this.state.subjects, e.target.id]
      this.setState({
        subjects: subjectsCopy
      })
    } else {
      const subjectsCopy = [...this.state.subjects].filter( subject => subject !== e.target.id)
      this.setState({
        subjects: subjectsCopy
      })
    }
  }

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.addStudentData(this.state.student, this.state.level, this.state.grade, this.state.subjects)
    this.setState({
      student: '', level: '', grade: '', subjects: [], redirect: true
    })
  }

  render() {
    const redirect = this.state.redirect ?  <Redirect to="/signup3"/> : '';
    return (
      <div>
        {redirect}
        <Header link1="/login" anchor1="Login" link2="/signup1" anchor2="Signup" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="4" />
          <Col xs="12" sm="4" >
            <Form onSubmit={this.handleSubmission}>
              <FormGroup>
                <Label for="student">Student Name</Label>
                <Input type="text" name="student" id="student" onChange={this.getFieldData}
                  value={this.state.student} placeholder="add student name" />
              </FormGroup>
              <FormGroup>
                <Label for="level">School Level</Label>
                <Input type="select" name="select" id="level" onChange={this.getFieldData}>
                  <option>Elementary</option>
                  <option>Middle School</option>
                  <option>High School</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="level">Grade</Label>
                <Input type="select" name="select" id="grade" onChange={this.getFieldData}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Input>
              </FormGroup>
              <div>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Math"
                  onChange={this.getCheckboxValues}/> Math
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="Science" 
                  onChange={this.getCheckboxValues}/> Science
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="English"
                  onChange={this.getCheckboxValues}/> English
                </Label>
              </FormGroup>
              <FormGroup check inline>
                <Label check>
                  <Input type="checkbox" id="History"
                  onChange={this.getCheckboxValues}/> History
                </Label>
              </FormGroup>
              </div>
              <Button style={{marginTop: '1rem', marginRight: '1rem', width: '6rem'}}>Submit</Button>
              <Button style={{marginTop: '1rem', width: '6rem'}}>Back</Button>
            </Form>
          </Col>
          <Col xs="12" sm="4" />
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = { addStudentData }
export default connect(null, mapDispatchToProps)(AddStudentInfo)