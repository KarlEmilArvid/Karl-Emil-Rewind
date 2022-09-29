import { Game } from '../models/data'
import './gameItems.scss'

interface Props {
    game: Game;
    removeItem: (id: number) => void
}

const GameItems = ({ game, removeItem }: Props) => {

    //tar bort beroende på vilket item man clickar på
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
            <td>
                <button className="remove-button" onClick={handleClick}>X</button>
            </td>
        </tr>
    )
}

export default GameItems
