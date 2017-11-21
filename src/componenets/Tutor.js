import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Tutor extends Component {

  render() {
    const { id, img, name, rating, match } = this.props;
    return (
      <ListGroup style={{marginBottom: '1rem'}}>
        <ListGroupItem>
        <Row>
          <Col xs="12" sm="3"><img src={img} alt="tutor" className="tutor-img" />
          </Col>
          <Col xs="12" sm="5">
            <Row>
              <Col><h3 className="tutor-text">{name}</h3></Col>
            </Row>
            <Row>
              <Col><h3 className="tutor-text">{`Rating: ${rating}`}</h3></Col>
            </Row>
            <Row>
            <Col><h3 className="tutor-text">{`Match: ${match}`}</h3></Col>
            </Row>
          </Col>
          <Col xs="12" sm="3" style={{marginTop: '15px'}}>
            <Row>
              <Col><Button tag={Link} to={`/tutor-schedule/${id}`}
                className="tutor-btn">See Schedule</Button>
              </Col>
            </Row>
            <Row>
              <Col><Button className="tutor-btn">Contact</Button></Col>
            </Row>
          </Col>
        </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default Tutor;

// const Tutor = ({ id, tutorName, subjects }) => (
//   <Row style={{ justifyContent: 'center' }}>
//     <Col sm="6">
//       <Card block inverse style={{ backgroundColor: '#2980b9', borderColor: '#2980b9', marginBottom: '5vh' }}>
//         <CardTitle>
//           <Link to={`/edit-todo/${id}`}>
//             <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
//           </Link>
//           {todoDescription}</CardTitle>
//         <Button onClick={() => handleCompletedClick(id)}>Mark Completed</Button>
//       </Card>
//     </Col>
//   </Row>
// );