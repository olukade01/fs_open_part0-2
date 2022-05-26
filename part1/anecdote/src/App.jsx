import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(Array(7).fill(0))

  const random = () => Math.floor(Math.random() * anecdotes.length)
  const handleAnecdote = () => setSelected(random())
  const handleVote = () => {
    const copy = [...vote]
    const newCopy = copy.map((c, cIndex) => cIndex === selected ? c + 1 : c)
    return setVote(newCopy)
  }
  const max = Math.max(...vote)
  const index = vote.indexOf(max)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {vote.find(v => v > 0) && anecdotes.map((a, i) => i === index && <div>{a}
        <p>has {max} votes</p> </div>)}
    </div>
  )
}

export default App