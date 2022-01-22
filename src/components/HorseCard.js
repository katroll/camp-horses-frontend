import { useParams } from "react-router-dom"

function HorseCard({ horses }) {
    const { id } = useParams();
    const horse = horses.find(horse => horse.name === id);

    console.log(horse);

    return (

            <div className="mx-10">
            <div className="flex flex-col mt-8">
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
                                                <button className="text-sm leading-5 text-gray-500"> <strong>Current String: </strong> {horse.string}</button>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <button className="text-sm leading-5 text-gray-500"> <strong>Age: </strong> {horse.age}</button>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <button className="text-sm leading-5 text-gray-500"> <strong>Year Born: </strong> {horse.year_born}</button>
                                            </td>
                                        </tr>
                                        <tr key={horse.id}>
                                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <button className="text-sm leading-5 text-gray-500"> <strong>Wrangler Horse? </strong> {horse.wrangler ? "Yes" : "No"}</button>
                                            </td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorseCard;