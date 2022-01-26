import { useParams, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"

import SummerReviewForm from "./SummerReviewForm";

function HorseCard({ horses }) {
    const { id } = useParams();
    const horse = horses.find(horse => horse.name === id);
    const history = useHistory();

    const [addSummerReview, setAddSummerReview] = useState(false); 
    const [notes, setNotes] = useState([])

    console.log("notes:" , notes)

    useEffect(() => {
        fetch("http://localhost:9292/notes")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const horseNotes = data.filter(note => note.horse_id === horse.id);
            setNotes([...horseNotes]);
        })
    }, [])

    function handleBackButtonClick() {
        history.push(`/horses`);
    }

    function handleAddSummerReview(formData, e) {
        e.preventDefault();

        console.log(formData)

        fetch("http://localhost:9292/notes", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(newNote => setNotes([...notes, newNote]))
        .then(setAddSummerReview(!addSummerReview));
    }

    if(horse === undefined) {
        return (
            <div className="flex items-center justify-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen">
            <div className="grid justify-items-start ml-10">
                <button className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-1 px-4 border border-gray-200 rounded shadow mt-3" onClick={handleBackButtonClick}>
                ←
                </button>
            </div>
            <div className="mx-10">
            <div className="flex flex-col mt-3">
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        {horse.name}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Current String: </strong> {horse.string}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Age: </strong> {horse.age}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Year Born: </strong> {horse.year_born}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Wrangler Horse? </strong> {horse.wrangler ? "Yes" : "No"}</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> 
                                                    <strong>Notes: </strong> 
                                                    <button className="bg-transparent hover:bg-blue-300 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-200 hover:border-transparent rounded" 
                                                        onClick={null}>Add Note
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="mx-10">
            <div className="flex flex-col mt-3">
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Year</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        String</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Summer Review</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {notes ? (notes.map(note => {
                                    return (
                                    <tr key={note.id}>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{note.date}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{note.string}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                            <div className="text-sm leading-5 text-gray-500">{note.note}</div>
                                        </td>
                                    </tr> )
                                })) : null }
                                        
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <button className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-200 rounded shadow m-3" 
            onClick={() => setAddSummerReview(!addSummerReview)}>
            Add Summer Review
        </button>
        </div>

        <div>
            {addSummerReview ? <SummerReviewForm horse={horse} handleAddSummerReview={handleAddSummerReview}/> : null}
        </div>
    </div>
    )
}

export default HorseCard;