//true=false switch? alltså går enbart att välja alternativ
//onClick = spara till json
//updatera lista från json
//osv

interface Props {
    handleChange: any
    formInput: any
    handleSubmit: any
}

function FormInput({handleChange, formInput, handleSubmit}: Props) {

    return (
        <form action="">
            <input type="text" onChange={handleChange} value={formInput.teamOneName} name="teamOne" className="form-control"  placeholder="Team One name:" />
            <input type="text" onChange={handleChange} value={formInput.teamTwoName} name="teamTwo" className="form-control"  placeholder="Team Two name:" />
            <input type="text" onChange={handleChange} value={formInput.gameName} name="gameName" className="form-control" placeholder="Game name:" />
            <input type="text" onChange={handleChange} value={formInput.teamOneResults} name="teamOneResults" className="form-control" placeholder="Did Team One win?" />
            <input type="text" onChange={handleChange} value={formInput.teamTwoResults} name="teamTwoResults" className="form-control" placeholder="Did Team Two win=?" />
            <input type="date" onChange={handleChange} value={formInput.date} name="date" className="form-control" placeholder="Date played:" />
            <input type="text" onChange={handleChange} value={formInput.time} name="time" className="form-control" placeholder="Time played:" />
            <input type="submit" onClick={handleSubmit} className="form-button" />
        </form>
    )
}

export default FormInput
