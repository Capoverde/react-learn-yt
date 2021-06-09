import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Container from './components/Container.jsx'
import Card from './components/Card.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Container />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
