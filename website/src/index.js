// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// Component
import App from './App'
// Style
import './index.css'
// Others
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.querySelector('#root')
)

reportWebVitals(console.log)