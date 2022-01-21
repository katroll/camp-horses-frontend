import "../styles/NewHorseForm.css"

function NewHorseForm() {
    return (
        <div className="form-container">
            <h1>new horse</h1>
            <form className="form-inputs">
                <label>name:</label>
                <input type="text" placeholder="Enter name"></input>
                <label>Age:</label>
                <input type="text" placeholder="Enter age"></input>
            </form>
        </div>
    )
}

export default NewHorseForm;