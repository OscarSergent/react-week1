import './App.css'
import User from './User'

function App() {

  const info = {
    name  : 'John',
    age   : 32
  }

  return (
    <>
      <User {...info}/>
    </>
  )
}

export default App
