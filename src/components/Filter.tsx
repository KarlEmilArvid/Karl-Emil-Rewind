import GameItems from "./GameItems"
import { Game } from '../models/data'
import { useMemo, useState } from "react";
import jsonData from '../data/gamesPlayed.json'
import GameList from "./GameList";
import './filter.scss'

const Filters = () => {
    const [gameList, setGameList] = useState<any[]>([])
    const [selectedGame, setSelectedGame] = useState<any[]>()

    let defaultGames = jsonData

    function handleGameChange(event: any) {
        setSelectedGame(event.target.value)
    }

    function getFilteredList() {
        if (!selectedGame) {
          return gameList
        }
        return selectedGame.filter((item: any) => item.gameName === selectedGame)
      }

    let filteredList = useMemo(getFilteredList, [selectedGame, gameList])

    return (
        <section>
            <button>Show 10 latest</button>
            <button>Show all games</button>
            <select onChange={handleGameChange} name="gameName" id="gameName">
                <option value=""></option>
                <option value="Fotboll">Fotboll</option>
                <option value="Hockey">Hockey</option>
                <option value="Shack">Shack</option>
            </select>
            <button>Show all games of fotball</button>
            <button>Show games by *player-name*</button>
            <button>Pick game to display?</button>
            <div>
            {filteredList.map((element, index) => (
                <GameList {...element} key={index} />
            ))}
            </div>
        </section>
    )
}

export default Filters
