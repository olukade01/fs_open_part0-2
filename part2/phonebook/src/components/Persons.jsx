const Person = ({ person, handleDelete }) => <div>{person.name} {person.number} <button onClick={handleDelete}>delete</button></div>

const Persons = ({ show, handleDelete }) => <div>
  {show.map(person => <Person person={person} handleDelete={() => handleDelete(person.id, person.name)} />)}
</div>


export default Persons
