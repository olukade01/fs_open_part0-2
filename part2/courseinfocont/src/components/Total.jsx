const Total = ({ course }) => <strong>total of {course.parts.reduce((acc, cur) => acc + cur.exercises, 0)} exercises</strong>

export default Total
