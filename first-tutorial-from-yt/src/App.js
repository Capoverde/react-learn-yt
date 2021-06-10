import './styles/App.scss'
import Button from './components/Button'
import Container from './components/Container.jsx'
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>

          {/* <Button /> */}

          <Counter />
        </div>
      </header>
      {/* <Container /> */}
    </div>
  )
}

export default App
