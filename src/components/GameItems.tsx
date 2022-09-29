import { Game } from '../models/data'
import './gameItems.scss'

interface Props {
    game: Game;
    removeItem: (id: number) => void
}

const GameItems = ({ game, removeItem }: Props) => {

    //det som klickas tas bort
    const handleClick: () => void = () => {
        removeItem(game.id)
    }

  return (
    <tr key={game.id}>
        <td>{game.teamOne}</td>
        <td>{game.teamTwo}</td>
        <td>{game.gameName}</td>
        <td>{game.teamOneResults}</td>
        <td>{game.teamTwoResults}</td>
        <td>{game.date}</td>
        <td>{game.time}</td>
        <button className="remove-button" onClick={handleClick}>X</button>
    </tr>
    )
}

export default GameItems
