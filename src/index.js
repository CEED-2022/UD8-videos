import ReactDOM from 'react-dom/client'
import App from './App'
import RoutedApp from './routing/RoutedApp'
import ReduxdApp from './redux-toolkit/ReduxApp'
import ReduxAsyncApp from './redux-async/ReduxAsyncApp'
import './styles/styles.css'

const root = ReactDOM.createRoot(document.getElementById("app"))
// root.render(<App />)
// root.render(<RoutedApp />)
root.render(<ReduxAsyncApp />)
