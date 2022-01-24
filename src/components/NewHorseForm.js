import "../styles/NewHorseForm.css"
import "../css/styles.css"
import { useState } from "react" 

function NewHorseForm({ onFormSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        string: ""
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
                <label>String:</label>
                    <select name="string" onChange={handleFormChange}>
                        <option>Select Unit</option>
                        <option>Lower Chipeta</option>
                        <option>Lower Ski Hi</option>
                        <option>Chipeta</option>
                        <option>Ski Hi</option>
                        <option>Senior Chipeta</option>
                        <option>Haiyaha</option>
                        <option>GTE</option>
                        <option>BTE</option>
                        <option>Floater</option>
                        <option>Colts</option>
                        <option>Undecided</option>
                    </select>
                <button className="bg-blue-500 text-white" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewHorseForm;