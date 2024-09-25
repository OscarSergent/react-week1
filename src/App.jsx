import './App.css'
import User from './User'

function App() {
  const infos = [
    {
      name  : 'John',
      age   : 32,
      url   : 'https://placehold.co/200'
    },
    {
      name  : 'Jane',
      age   : 25,
      url   : 'https://placehold.co/200'
    },
    {
      name  : 'Jem',
      age   : 42,
      url   : 'https://placehold.co/200'
    },
  ]

  return (
    <>
      {infos.map((info, i) => <User {...info} key={i}/>)}
    </>
  )
}

export default App