import "../styles/NewHorseForm.css"
import "../css/styles.css"
import { useState } from "react" 

function NewHorseForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        age: 0
    });

    function handleFormChange(e) {
        const key = e.target.name;
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    return (
        <div className="form-container shadow-2xl bg-blue-300">
            <h1>Add A Horse</h1>
            <form className="form-inputs" onSubmit={(e) => onFormSubmit(formData, e)}>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter name" onChange={handleFormChange}></input>
                <label>Age:</label>
                <input type="text" name="age" placeholder="Enter age" onChange={handleFormChange}></input>
                <button className="bg-blue-500 text-white" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewHorseForm;