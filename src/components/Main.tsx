//formulär
//formulär required
//importerade funktioner
//gör om gameList helt, spara till json, ta från json, mappa ut från json

import { useEffect, useState } from 'react'
import {FormState, Game} from '../models/data'
import FormInput from './FormInput'
import GameList from './GameList'

interface Props {
    games: Game[]
}

function Main({games}: Props) {
    const [query, setQuery] = useState<string>('')
    const [gamesToShow, setGamesToShow] = useState<Game[]>(games.filter(games => games.gameName.toLowerCase().includes(query) || games.teamOne.toLowerCase().includes(query) || games.teamTwo.toLowerCase().includes(query)));;
    const [formInput, setFormInput] = useState<FormState>({
        teamOne: '',
        teamTwo: '',
        gameName: '',
        teamOneResults: '',
        teamTwoResults: '',
        date: '',
        time: ''
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const checkIfEmpty = !Object.values(formInput).every(res => res === '')
        if(checkIfEmpty) {
            const newData = (data: any) => ([...data, formInput])
            setGamesToShow(newData)
            const emptyInput = {
                teamOne: '',
                teamTwo: '',
                gameName: '',
                teamOneResults: '',
                teamTwoResults: '',
                date: '',
                time: ''
            }
            setFormInput(emptyInput)
        }
    }
    //sorterar spelen före sidan laddas, beroende på datum spelat
    useEffect(() => {
        const sortedGames = [...gamesToShow]
        sortedGames.sort(( a, b ) => {
                if (a.date < b.date) {return 1;}
                if (a.date > b.date) {return -1;}
                return 0;
            })
            setGamesToShow(sortedGames)
        }, [gamesToShow])
    //filter för spelnamn, teamOne namn, teamTwo namn
    useEffect(() => {
        setGamesToShow(games.filter(games =>
            games.gameName.toLowerCase().includes(query) ||
            games.teamOne.toLowerCase().includes(query) ||
            games.teamTwo.toLowerCase().includes(query)));
        }, [query])

    const showLatest = () => {

    }

    const noWinner = () => {

    }

    return (
        <div className='form-wrapper'>
            <FormInput handleChange={handleChange} formInput={formInput} handleSubmit={handleSubmit}/>
            <section className="search-wrapper">
                <input value={query} type="text" placeholder="Search game or team names" className="search" onChange={e => setQuery(e.target.value)} />
            </section>
            <section className='button-wrapper'>
                <button onClick={() => setQuery('')}>Show all games</button>
                <button onClick={showLatest}>Show 10 latest</button>
                <button onClick={noWinner}>Show games with no winner</button>
            </section>
            {gamesToShow?.map((game) => (
                <GameList game={game} key={game.id}/>
            ))}
        </div>
    )
}

export default Main
