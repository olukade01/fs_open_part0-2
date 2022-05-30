const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ course }) => <div>
  {course.parts.map(part => <Part key={part.id} part={part} />)}
</div>

export default Content
