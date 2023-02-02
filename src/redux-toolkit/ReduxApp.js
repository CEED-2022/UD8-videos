import '../styles/app.css'

import ReduxList from './ReduxList'
import ColorPicker from './ColorPicker'

import { Provider } from "react-redux"
import store from "./features/store"

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <ColorPicker />
        <ReduxList />
      </div>
    </Provider>
  )
}

export default App
