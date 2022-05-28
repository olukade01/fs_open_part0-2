import React, { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)
  const all = good + bad + neutral
  const positive = good === 0 ? (0 + '%') : (`${good / all * 100} %`)
  const average = all / 3

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick}
      />
      <h1>statistics</h1>
      <Statistics
        good={good} bad={bad} neutral={neutral} all={all} positive={positive}
        average={average}
      />
    </div>
  )
}

export default App