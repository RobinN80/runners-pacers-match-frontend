import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Runners, Pacers } from '../shared/runners-pacers-mock-data';

const ParticipantDisplayGrid = () => {
    const [rowData ] = useState(Runners);

    const columns = [
        {field: 'name', headerName: 'Name', width: 150},
        {field: 'gender', headerName: 'Gender', width: 150},
        {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
        {field: 'runnerDistance', headerName: 'Distance', width: 150},
        {field: 'runner50TimeEstimate', headerName: 'Time Estimate', width: 150},
        {field: 'runner100TimeEstimate', headerName: 'Time Estimate', width: 150},
        {field: 'familiarityOfCourse', headerName: 'Familiarity With Course', width: 150},
    ]

    return (
        <div style={{height: 300, width: '100%'}}>
            <DataGrid rows={rowData} columns={columns}/>
        </div>
    );
}

export default ParticipantDisplayGrid;