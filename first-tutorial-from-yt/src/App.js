import './styles/App.scss'
import Button from './components/Button'
import Container from './components/Container.jsx'
import Card from './components/Card.jsx'
import Counetr from './components/Conuter'

function App () {

  const greets = `Hello World!`;
  const react_link = `Learn React`;

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <h1 className='spacer text'>
          {greets.toUpperCase()}
          </h1>
          <Button />
          <a
            className='App-link spacer'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
          {react_link}
          </a>
        </div>
      </header>
      <Container />
    </div>
  )
}

export default App
