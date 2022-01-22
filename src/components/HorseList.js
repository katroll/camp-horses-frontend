import "../css/styles.css"
import { useHistory } from "react-router-dom"

function HorseList({ allHorses }) {
    const history = useHistory();

    function handleHorseNameClick(e) {
        history.push(`horses/${e.target.value}`);
    }

    return (
        <div className="mx-10">
            <div className="flex flex-col mt-8">
                <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Name</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Age</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Year Born</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Current String</th>
                                    <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Wrangler Horse?</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {allHorses.map(horse => {
                                    return (
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <button className="text-sm leading-5 text-gray-500" onClick={handleHorseNameClick} value={horse.name}>{horse.name}</button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{horse.age}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{new Date().getFullYear() - horse.age}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{horse.string}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div className="text-sm leading-5 text-gray-500">{horse.wrangler ? "Yes" : "No"}</div>
                                            </td>
                                        </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorseList;
