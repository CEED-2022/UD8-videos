import '../styles/app.css'

import AsyncList from './AsyncList'

import { Provider } from "react-redux"
import store from "./features/store"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <AsyncList />
      </div>
    </Provider>
  )
}

export default App
