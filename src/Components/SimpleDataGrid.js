import { Runners, Pacers } from "../shared/runners-pacers-mock-data";


const SimpleDataGrid = (props) => {
//  const {participantType} = props;
 const columnsRunners = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'runnerDistance', headerName: 'Distance', width: 150},
    {field: 'runner50TimeEstimate', headerName: 'Time Estimate 50', width: 150},
    {field: 'runner100TimeEstimate', headerName: 'Time Estimate 100', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Familiarity With Course', width: 150},
]

return(
    <table border="1" >
        <thead>
            <tr>
                {columnsRunners.map((column) => (
                    <th key={column.field}>{column.headerName}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {Runners.map((runner)=> (
                <tr key={runner.id}>
                    {columnsRunners.map((column)=> (
                        <td key={runner.id + column.field}>{runner[column.field]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
)
};

export default SimpleDataGrid;