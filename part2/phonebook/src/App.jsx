import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const find = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    find
      ? <> {window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`) ? personService.update(find.id, newPerson).then(returnValue => {
        setPersons(persons.map(p => p.id !== find.id ? p : returnValue))
        setMessage(`Number of ${newPerson.name} changed`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }).catch(error => {
        setMessage(
          error.response.data.error
          // `Information of ${newPerson.name} has already been removed from server`
        );
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      })
        : ""} </> :
      personService.create(newPerson).then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`Added ${newPerson.name}`)
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      }).catch((error) => {
        setMessage(error.response.data.error);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        console.log(
          error.response.data.error,
          typeof error.response.data.error
        );
      })
    setNewName("")
    setNewNumber("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = (id, personName) => {
    if (window.confirm(`Delete ${personName}?`)) {
      personService.delet(id).then(setPersons(persons.filter(person => person.id !== id)))
    }
  }

  const show = filter.length ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      {message && <Notification message={message} />}
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Persons show={show} handleDelete={handleDelete} />
    </div>
  )
}

export default App