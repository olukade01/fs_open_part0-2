import Header from "./Header"
import Total from "./Total"
import Content from "./Content"

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course[0]} />
      <Content course={course[0]} />
      <Total course={course[0]} />
      <Header course={course[1]} />
      <Content course={course[1]} />
      <Total course={course[1]} />
    </div>
  )
}

export default Course
