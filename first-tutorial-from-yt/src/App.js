import './styles/App.scss'
import Button from './components/Button'
import Container from './components/Container.jsx'
import Card from './components/Card.jsx'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <p className='spacer'>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button />
          <a
            className='App-link spacer'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
          Learn React
          </a>
        </div>
      </header>
      <Container />
    </div>
  )
}

export default App
