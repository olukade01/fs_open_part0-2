const Part = ({ part, exercise }) => <p>{part} {exercise}</p>

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0].name} exercise={course.parts[0].exercise} />
      <Part part={course.parts[1].name} exercise={course.parts[1].exercise} />
      <Part part={course.parts[2].name} exercise={course.parts[2].exercise} />
    </div>
  )
}

export default Content
