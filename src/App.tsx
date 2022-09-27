import { useState } from 'react'
import {Game} from './models/data'
import jsonData from './data/gamesPlayed.json'
import Header from './components/Header'
import Main from './components/Main'
import './App.scss'

function App() {
  const [games, setGames] = useState<Game[]>(jsonData.gamesPlayed)

  return (
    <div className="App">
      <Header/>
      <Main games={games}/>
    </div>
  )
}

export default App
