import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// important components
import Homepage from '../containers/HomePage';
import LoginPage from '../containers/LoginPage';
import AddParentInfo from '../containers/AddParentInfo';
import AddStudentInfo from '../containers/AddStudentInfo';
import AddCourseInfo from '../containers/AddCourseInfo';
import UserDashboard from '../containers/UserDashboard';
import TutorSchedule from '../containers/TutorSchedule';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup1' component={AddParentInfo} />
          <Route path='/signup2' component={AddStudentInfo} />
          <Route path='/signup3' component={AddCourseInfo} />
          <Route path='/userdash' component={UserDashboard} />
          <Route path='/tutor-schedule/:id' component={TutorSchedule} />
        </Switch>
      </Router>
    );
  }
}

export default App;
