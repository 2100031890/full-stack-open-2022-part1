import { useState } from 'react'
const Header = props => <h1>{props.name}</h1>
const Statistic = ({text, value}) => {
  if (text === "positive") {
    return (
      <tr><td>{text} </td><td>{value} %</td></tr>
    )
  }

  return (
    <tr><td>{text}</td><td> {value}</td></tr>
  )
}

const Statistics = ({clicks}) => {
    const total = clicks.good + clicks.neutral + clicks.bad
    const average = (clicks.good * 1 + clicks.bad * -1) / total
    const positive = clicks.good * (100/total)

    if (total === 0) {
      return (
        <div>
          No feedback given
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            <Statistic text="Good" value={clicks.good} />
            <Statistic text="Neutral" value={clicks.neutral} />
            <Statistic text="Bad" value={clicks.bad} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={positive} />
          </tbody>
        </table>
      </div>
    )
}


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const handleGoodClick = () =>setClicks({...clicks, good: clicks.good + 1})
  const handleNeutralClick = () =>setClicks({...clicks, neutral: clicks.neutral + 1})
  const handleBadClick = () =>setClicks({...clicks, bad: clicks.bad + 1})

  return (
    <div>
      <Header name="Give feedback" />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />
    </div>
  )
}

export default App
