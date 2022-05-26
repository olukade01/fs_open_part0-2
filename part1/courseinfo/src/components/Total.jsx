const Total = ({ course }) => <p>Number of exercises {course.parts.reduce((acc, cur) => acc + cur.exercise, 0)}</p>
//  <p>Number of exercises {course.parts[0].exercise + course.parts[1].exercise + course.parts[2].exercise}</p>

export default Total
