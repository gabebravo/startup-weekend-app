
export const getTutors = () => {
  return fetch('http://localhost:3001/tutors')
    .then( res => res.json())
}