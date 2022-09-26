//formulär
//importerade funktioner
//gör om gameList helt, spara till json, ta från json, mappa ut från json
import { useState } from 'react'
import {FormState, Game} from '../models/data'
import FormInput from './FormInput'
import GameList from './GameList'
import jsonData from '../data/gamesPlayed.json'

interface Props {
    games: Game[];
}

function Main() {
    const [game, setGame] = useState<Game[]>(jsonData.gamesPlayed);
    const [formInput, setFormInput] = useState<FormState>(
        {
            teamOne: '',
            teamTwo: '',
            gameName: '',
            teamOneResults: false,
            teamTwoResults: false,
            date: '',
            time: ''
        }
    )

    const handleChange = (e: any) => {
        const newInput = (data: any) => ({...data, [e.target.name]:e.target.value})
        setFormInput(newInput)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const checkIfEmpty = !Object.values(formInput).every(res => res === '')
        if(checkIfEmpty) {
            const newData = (data: any) => ([...data, formInput])
            setGame(newData)
            const emptyInput = {teamOne: '', teamTwo: '', gameName: '', teamOneResults: false, teamTwoResults: false, date: '', time: ''}
            setFormInput(emptyInput)
        }
    }

    return (
        <div className='form-wrapper'>
            <FormInput handleChange={handleChange} formInput={formInput} handleSubmit={handleSubmit}/>
            {game?.map((game) => (
                <GameList game={game} key={game.id}/>
            ))}
        </div>
    )
}

export default Main
