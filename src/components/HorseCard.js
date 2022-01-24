import { useParams, useHistory } from "react-router-dom"

function HorseCard({ horses }) {
    const { id } = useParams();
    const horse = horses.find(horse => horse.name === id);
    const history = useHistory();

    function handleBackButtonClick(e) {
        history.push(`/horses`);
    }

    return (
        <div>
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
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Current String: </strong> {horse.string}</div>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Age: </strong> {horse.age}</div>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Year Born: </strong> {horse.year_born}</div>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500"> <strong>Wrangler Horse? </strong> {horse.wrangler ? "Yes" : "No"}</div>
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
                                        Notes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{new Date().getFullYear()}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{horse.string}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{horse.wrangler || horse.string === "Colts" ? horse.wrangler ? "Wrangler Horse" : "Colts Program" : "Camper Horse"}</div>
                                            </td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <button class="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 border border-gray-200 rounded shadow m-3" onClick={null}>
            Add Note
        </button>
        </div>
    </div>
    )
}

export default HorseCard;