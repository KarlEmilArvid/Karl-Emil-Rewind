import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'
import jsonData from './data/gamesPlayed.json'
import {Game} from './models/data'

function App() {
  const [games, setGames] = useState<Game[]>(jsonData.gamesPlayed)

  return (
    <div className="App">
      <Header/>
      <Main />
    </div>
  )
}

export default App
