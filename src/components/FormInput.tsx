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
        <form onSubmit={handleSubmit} className="form" action="">
            <input type="text" onChange={handleChange} value={formInput.teamOne} name="teamOne" className="teamOne"  placeholder="Team One name:" required/>
            <input type="text" onChange={handleChange} value={formInput.teamTwo} name="teamTwo" className="teamTwo"  placeholder="Team Two name:" required/>
            <label htmlFor="teamOneResults" className="teamOneResults">Did Team One win?</label>
            <select onChange={handleChange} value={formInput.teamOneResults} name="teamOneResults" className="teamOneOption" id="teamOneResults" required>
                <option value=""></option>
                <option value="W">W</option>
                <option value="L">L</option>
            </select>
            <label htmlFor="teamTwoResults" className="teamTwoResults">Did Team Two win?</label>
            <select onChange={handleChange} value={formInput.teamTwoResults} name="teamTwoResults" className="teamTwoOption" id="teamTwoResults" required>
                <option value=""></option>
                <option value="W">W</option>
                <option value="L">L</option>
            </select>
            <input type="text" onChange={handleChange} value={formInput.gameName} name="gameName" className="gameName" placeholder="Game name:" required/>
            <input type="text" onChange={handleChange} value={formInput.time} name="time" className="time" placeholder="Time played:" required/>
            <input type="date" onChange={handleChange} value={formInput.date} name="date" className="date" placeholder="Date played:" required/>
            <input type="submit" value="Add game" className="form-button" />
        </form>
    )
}

export default FormInput
