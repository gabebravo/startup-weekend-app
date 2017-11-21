import { combineReducers } from 'redux';
import * as actions from '../actions';

export const signupData = ( state = {}, action ) => {
  switch(action.type) {
    case actions.ADD_PARENT_DATA: 
    const { id, parent, email, password, zip } = action
      return {...state, id, parent, email, password, zip};
    case actions.ADD_STUDENT_DATA: 
      const { student, level, grade, subjects } = action
        return {...state, student, level, grade, subjects};
    case actions.ADD_COURSE_DATA: 
      const { courses } = action
        return {...state, courses};
    default: 
      return state;
  }
}

export default combineReducers({ signupData, 

});