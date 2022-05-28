const StatLine = ({ text, value }) => <div>{text} {value}</div>

const Statistics = ({ good, bad, neutral, positive, all, average }) => {
  if (!(good || bad || neutral)) return <div>No feedback given</div>

  return (
    <div>
      <StatLine text='good' value={good} />
      <StatLine text='neutral' value={neutral} />
      <StatLine text='bad' value={bad} />
      <StatLine text='all' value={all} />
      <StatLine text='average' value={average} />
      <StatLine text='positive' value={positive} />
    </div>
  )
}

export default Statistics
