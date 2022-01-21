function HorseList({ allHorses }) {

    console.log(allHorses)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Year Born</th>
                    </tr>
                </thead>
                <tbody>
                    {allHorses.map(horse => {
                        return (
                            <tr key={horse.id}>
                                <td>{horse.name}</td>
                                <td>{horse.age}</td>
                                <td>{new Date().getFullYear()}</td>
                            </tr>
                    )})}
                </tbody>
            </table>
        </div>
    )
}

export default HorseList;
