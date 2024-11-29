import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Store from './redux/Store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <Provider store ={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)
