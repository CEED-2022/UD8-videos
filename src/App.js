/* eslint-disable no-unused-vars */
import Calendar from './calendar/Calendar'
import CalendarClass from './calendar/CalendarClass'
import './styles/app.css'
import RefForm from './useRef/RefForm'
import List from './reducer/List'
import ReduxList from './redux-toolkit/ReduxList'

function App() {
  return (
    <div className="app">
      {/* <h1>Super calendar</h1>
      <Calendar year={2023} month={1}/> */}
      <List />
    </div>
  )
}

export default App

