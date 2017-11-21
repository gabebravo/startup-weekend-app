import React from 'react';
import { Button, Form, FormGroup, Label, 
  Input, Row, Col } from 'reactstrap';
import Header from '../componenets/Header';

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Header link1="/login" anchor1="Login" link2="/signup1" anchor2="Signup" />
        <Row style={{ paddingTop: '20vh' }}>
          <Col xs="12" sm="4" />
          <Col xs="12" sm="4" >
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="account email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="enter password" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col xs="12" sm="4" />
        </Row>
      </div>
    );
  }
}

export default LoginPage