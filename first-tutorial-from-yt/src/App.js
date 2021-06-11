import './styles/App.scss'
import Button from './components/Button'
import Container from './components/Container.jsx'
import Card from './components/Card.jsx'
import Counter from './components/Counter.jsx'

import csshake from 'csshake'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container App-container'>

        <Counter />
          <Button  />

        </div>
      </header>
      {/* <Container /> */}
    </div>
  )
}

export default App
