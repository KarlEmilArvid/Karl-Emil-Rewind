import { useState } from 'react'
import { Game } from './models/data'
import jsonData from './data/gamesPlayed.json'
import Header from './components/Header'
import Main from './components/Main'
import './App.scss'

function App() {
  const [games, setGames] = useState<Game[]>(localData)

  function localData(): any {
    const dataExists = localStorage.getItem('games')
    return dataExists ? JSON.parse(dataExists) : localStorage.setItem('games', JSON.stringify([...jsonData.gamesPlayed]))
  }

  return (
    <div className="App">
      <Header />
      <Main games={games} />
    </div>
  )
}

export default App
