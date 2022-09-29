//formulär
//formulär required
//gör om gameList helt, spara till json, ta från json, mappa ut från json

import { useEffect, useState } from 'react'
import {FormState, Game} from '../models/data'
import FormInput from './FormInput'
import GameList from './GameList'
import './main.scss'

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

    const sortedGames = [...gamesToShow].sort(( a, b ) => {
        if (a.date < b.date) {return 1}
        if (a.date > b.date) {return -1}
        return 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event: any): void => {
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
    //filter för spelnamn, teamOne namn, teamTwo namn
    useEffect(() => {
        setGamesToShow(games.filter(games =>
            games.gameName.toLowerCase().includes(query) ||
            games.teamOne.toLowerCase().includes(query) ||
            games.teamTwo.toLowerCase().includes(query)));
        }, [query])

    const showLatest = (): void => {
        let tenLatest = sortedGames.slice(0, 10)
        setGamesToShow(tenLatest)
    }
    //funkar men ennbart om man redan sökt på namn
    const noWinner = (): void => {
        let noWinners = sortedGames.filter((games) => {
            if(games.teamOneResults === 'L' && games.teamTwoResults === 'L') {
                return games;
            }})
        setGamesToShow(noWinners)
    }
    //resets men funkar enbart om man skrivit något i sökfält
    const showAll = () => {
        setQuery('')
    }

    return (
        <div className='main-wrapper'>
            <FormInput handleChange={handleChange} formInput={formInput} handleSubmit={handleSubmit}/>
            <section className="search-container">
                <input value={query} type="text" placeholder="Search game or team names" className="search" onChange={e => setQuery(e.target.value)} />
            </section>
            <section className='button-wrapper'>
                <button onClick={showAll}>Show all games</button>
                <button onClick={showLatest}>Show 10 latest</button>
                <button onClick={noWinner}>Games with no winner</button>
            </section>
            {sortedGames?.map((game) => (
                <GameList game={game} key={game.id}/>
            ))}
        </div>
    )
}

export default Main
