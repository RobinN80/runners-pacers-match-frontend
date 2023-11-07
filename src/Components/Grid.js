import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Runners, Pacers } from '../shared/runners-pacers-mock-data';

const columnsRunners = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'runnerDistance', headerName: 'Distance', width: 150},
    {field: 'runner50TimeEstimate', headerName: 'Time Estimate', width: 150},
    {field: 'runner100TimeEstimate', headerName: 'Time Estimate', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Familiarity With Course', width: 150},
]

const columnsPacers = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'runnerDistance', headerName: 'Distance', width: 150},
    {field: 'runner50TimeEstimate', headerName: 'Time Estimate', width: 150},
    {field: 'runner100TimeEstimate', headerName: 'Time Estimate', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Familiarity With Course', width: 150},
]

const ParticipantDisplayGrid = () => {
    const [rowData ] = useState(Runners);
    const [columnData ] = useState(columnsRunners)

    return (
        <div style={{height: 300, width: '100%', padding: 25}}>
            <DataGrid style={{backgroundColor: 'white', padding: 25}} rows={rowData} columns={columnData}/>
        </div>
    );
}

export default ParticipantDisplayGrid;