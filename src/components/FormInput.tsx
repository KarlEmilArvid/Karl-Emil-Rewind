//onClick = spara till json
//updatera lista från json
//osv

import './formInput.scss'

interface Props {
    handleChange: any
    formInput: any
    handleSubmit: any
}

function FormInput({handleChange, formInput, handleSubmit}: Props) {

    return (
        <form className="form" action="">
            <input type="text" onChange={handleChange} value={formInput.teamOne} name="teamOne" className="teamOne"  placeholder="Team One name:" />
            <input type="text" onChange={handleChange} value={formInput.teamTwo} name="teamTwo" className="teamTwo"  placeholder="Team Two name:" />
            <label htmlFor="teamOneResults" className="teamOneResults">Did Team One win?</label>
            <select onChange={handleChange} value={formInput.teamOneResults} name="teamOneResults" className="teamOneOption" id="teamOneResults">
                <option value=""></option>
                <option value="Win">W</option>
                <option value="Loss">L</option>
            </select>
            <label htmlFor="teamTwoResults" className="teamTwoResults">Did Team Two win?</label>
            <select onChange={handleChange} value={formInput.teamTwoResults} name="teamTwoResults" className="teamTwoOption" id="teamTwoResults">
                <option value=""></option>
                <option value="Win">W</option>
                <option value="Loss">L</option>
            </select>
            <input type="text" onChange={handleChange} value={formInput.gameName} name="gameName" className="gameName" placeholder="Game name:" />
            <input type="text" onChange={handleChange} value={formInput.time} name="time" className="time" placeholder="Time played:" />
            <input type="date" onChange={handleChange} value={formInput.date} name="date" className="date" placeholder="Date played:" />
            <input type="submit" onClick={handleSubmit} className="form-button" />
        </form>
    )
}

export default FormInput
