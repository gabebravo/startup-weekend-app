
export const ADD_PARENT_DATA = 'ADD_PARENT_DATA';
export const addParentData = (id, parent, email, password, zip) => ({
  type: ADD_PARENT_DATA, id, parent, email, password, zip
})

export const ADD_STUDENT_DATA = 'ADD_STUDENT_DATA';
export const addStudentData = (student, level, grade, subjects) => ({
  type: ADD_STUDENT_DATA, student, level, grade, subjects
})

export const ADD_COURSE_DATA = 'ADD_COURSE_DATA';
export const addCourseData = courses => ({
  type: ADD_COURSE_DATA, courses
})