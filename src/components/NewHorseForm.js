
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
        <div className="flex justify-center items-center w-full h-screen">
            <div className="flex justify-center flex-col shadow-2xl bg-blue-300 w-1/2 h-1/2">
                <h1 className="pb-5">Add A Horse</h1>
                <form className="flex flex-col mx-10" onSubmit={(e) => onFormSubmit(formData, e)}>
                    <div className="pb-3">
                        <label className="pr-3">Name:</label>
                        <input className="rounded-sm" type="text" name="name" placeholder="Enter name" onChange={handleFormChange}></input>
                    </div>
                    <div className="pb-3">
                        <label className="pr-3">Age:</label>
                        <input className="rounded-sm" type="text" name="age" placeholder="Enter age" onChange={handleFormChange}></input>
                    </div>
                    <div className="pb-3">
                        <label className="pr-3">String:</label>
                        <select className="rounded-sm" name="string" onChange={handleFormChange}>
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
                    </div>
                    <button className="rounded-md hover:ring ring-blue-550 bg-blue-500 text-white" type="submit">Submit</button>
                </form>
            </div>
        </div>
        
    )
}

export default NewHorseForm;