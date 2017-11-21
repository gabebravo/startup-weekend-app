import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addParentData } from '../actions'
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, 
  Input, Row, Col } from 'reactstrap';
import Header from '../componenets/Header';
const uuidv4 = require('uuid/v4');

class AddParentInfo extends Component {

  state = {
    id: '', parent: '', email: '', password: '', zip: '', redirect: false
  }

  componentWillUnmount() {
    this.setState({
      id: '', parent: '', email: '', password: '', zip: '', redirect: false
    })
  }

  getFieldData = (e) => {
    switch( e.target.id ) {
      case "parent" :
      this.setState({
        parent: e.target.value
      })
      break;
      case "email" :
        this.setState({
          email: e.target.value
        })
        break;
      case "password" :
        this.setState({
          password: e.target.value
        })
        break;
      case "zip" :
        this.setState({
          zip: e.target.value
        })
        break;
      default:
        break;
    }
  }

  handleSubmission = (e) => {
    e.preventDefault();
    this.props.addParentData(uuidv4(), this.state.parent, this.state.email, this.state.password, this.state.zip)
    this.setState({
      id: '', parent: '', email: '', password: '', zip: '', redirect: true
    })
  }

  render() {
    const redirect = this.state.redirect ?  <Redirect to="/signup2"/> : '';
    return (
      <div>
        {redirect}
        <Header link1="/login" anchor1="Login" link2="/signup1" anchor2="Signup" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="4" />
          <Col xs="12" sm="4" >
            <Form onSubmit={this.handleSubmission}>
              <FormGroup>
                <Label for="parent">Parent Name</Label>
                <Input type="text" name="parent" id="parent" onChange={this.getFieldData}
                  value={this.state.parent} placeholder="add parent name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" onChange={this.getFieldData}
                  value={this.state.email} placeholder="enter email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" onChange={this.getFieldData}
                  value={this.state.password} placeholder="enter password" />
              </FormGroup>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input type="text" name="zip" id="zip" onChange={this.getFieldData}
                  value={this.state.zip} placeholder="enter zip" />
              </FormGroup>
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

const mapDispatchToProps = { addParentData }
export default connect(null, mapDispatchToProps)(AddParentInfo)