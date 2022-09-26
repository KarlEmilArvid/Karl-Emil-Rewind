export interface FormState {
    teamOne: string,
    teamTwo: string,
    gameName: string,
    teamOneResults: boolean,
    teamTwoResults: boolean,
    date: string,
    time: string
}

export interface Game {
    teamOne: string,
    teamTwo: string,
    gameName: string,
    teamOneResults: boolean,
    teamTwoResults: boolean,
    date: string,
    time: string,
    id: number
}
