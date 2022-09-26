import { Game } from '../models/data'

interface Props {
    game: Game;
}

const GameItems = ({ game }: Props) => {

  return (
    <tr key={game.id}>
        <td>{game.teamOne}</td>
        <td>{game.teamTwo}</td>
        <td>{game.gameName}</td>
        <td>{game.teamOneResults}</td>
        <td>{game.teamTwoResults}</td>
        <td>{game.date}</td>
        <td>{game.time}</td>
    </tr>
    )
}

export default GameItems
