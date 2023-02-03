import { useState } from 'react'

import './styles/calendar.css'
import CalendarTitle from './CalendarTitle'
import Week from './Week'

import { getWeeksInMonth } from './date_functions'

function Calendar(props) {
  const { year, month } = props
  const holidays = (month == 7) || (month == 8)
  const weeks = getWeeksInMonth(month, year)

  let [selected, setSelected] = useState(1)

  function click(day) {
    setSelected(day)
  }

  return (
    <div className={`calendar ${holidays ? 'holidays' : ''}`}>
      <button onClick={() => setSelected(++selected)}>+</button>
      <button onClick={() => setSelected(--selected)}>-</button>
      {selected}
      <CalendarTitle month={month} year={year}/>
      {
        weeks.map((week, index) =>
          <Week key={index} days={week} selected={selected} click={click}/>
        )
      }
    </div>
  )
}

export default Calendar
