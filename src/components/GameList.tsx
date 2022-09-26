import GameItems from "./GameItems"
import { Game } from '../models/data'
import './gameList.scss'

interface Props {
    game: Game;
}

const GameList = ({ game }: Props) => {
    console.log(game)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Team One Name:</th>
                    <th>Team Two Name:</th>
                    <th>Game Name:</th>
                    <th>Team One Results:</th>
                    <th>Team Two Results:</th>
                    <th>Date:</th>
                    <th>Time:</th>
                </tr>
            </thead>
            <tbody>
                <GameItems game={game} key={game.id}/>
            </tbody>
        </table>
    )
}

export default GameList
