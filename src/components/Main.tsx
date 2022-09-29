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
    //sorterar alla spel, det är den här arrayen som mappas ut i komponenten
    const sortedGames = [...gamesToShow].sort(( a, b ) => {
        if (a.date < b.date) {return 1}
        if (a.date > b.date) {return -1}
        return 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }
    //hanterar att nya spel läggs till och sparas
    const handleSubmit = (event: any): void => {
        event.preventDefault();
        const checkIfEmpty = !Object.values(formInput).every(res => res === '')
        if(checkIfEmpty) {
            const newData = (data: any) => ([...data, formInput])
            setGamesToShow(newData)
            localStorage.setItem('games', JSON.stringify([...games, formInput]))
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
    //filter för att visa 10 senaste, beroende på vad som är sökt
    const showLatest = (): void => {
        let tenLatest = sortedGames.slice(0, 10)
        setGamesToShow(tenLatest)
    }
    //filter för att visa spel utan vinnare, beroende på vad som är sökt
    const noWinner = (): void => {
        let noWinners = sortedGames.filter((games) => {
            if(games.teamOneResults === 'L' && games.teamTwoResults === 'L') {
                return games;
            }})
        setGamesToShow(noWinners)
    }
    //återställer arrayen och sökfält, för att visa alla spel
    const showAll = () => {
        setGamesToShow(games)
        setQuery('')
    }
    //remove funkar men uppdaterar inte hemsidan, går att ta bort men visas inte om man inte laddar om sidan
    const removeItem: (id:number) => void = (id) => {
        const localData: Game[] = JSON.parse(localStorage.getItem('games') || '' )
        const gameIndex: number = localData.findIndex(game => game.id == id)
        localData.splice(gameIndex, 1)
        console.log(gameIndex)
        setGamesToShow(localData)
        localStorage.setItem('games', JSON.stringify(localData))
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
                <GameList game={game} removeItem={removeItem} key={game.id}/>
            ))}
        </div>
    )
}

export default Main
