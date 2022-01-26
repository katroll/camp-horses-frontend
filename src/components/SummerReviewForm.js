import { useState } from "react"

function SummerReviewForm({ horse, handleAddSummerReview }) {
    const [formData, setFormData] = useState({
        date: new Date().getFullYear(),
        horse_id: horse.id,
        note: "",
        category: "summerReview",
        string: ""
    }) 

    console.log(new Date().getFullYear())

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    console.log(formData)

    return (
        <div className="bg-blue-300 mb-10 mx-10 py-10 rounded-md">
            <h1 className="pb-5">{new Date().getFullYear()} Summer</h1>
            <form onSubmit={(e) => handleAddSummerReview(formData, e)}>
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
            <div>
                <label>Comments: </label>
                <input className="" name="note" type="textarea" onChange={handleFormChange}></input>
            </div>
            <div className="pt-3">
                <button className="rounded-md hover:ring ring-blue-550 bg-blue-500 text-white px-3" 
                    type="submit">
                    Update Summer Reviews
                </button>
            </div>
            </form>
        </div>
    )

}

export default SummerReviewForm;