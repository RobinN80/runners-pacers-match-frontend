import React, {useEffect, useState} from 'react';
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

const ParticipantDisplayGrid = (props) => {
    const [rowData, setRowData ] = useState([]);
    const [columnData, setColumnData ] = useState(columnsRunners)

    const {participantType} = props;

    useEffect(() => {
        if(participantType === 'runners'){
            setRowData(Runners);
            setColumnData(columnsRunners)
        }
        if(participantType === 'pacers'){
            setRowData(Pacers);
            setColumnData(columnsPacers)
        }
    }, [participantType]);

    return (
        <div style={{height: 300, width: '100%', padding: 25}}>
            <p>{participantType.toUpperCase()}</p>
            <DataGrid style={{backgroundColor: 'white', padding: 25}} rows={rowData} columns={columnData}/>
        </div>
    );
}

export default ParticipantDisplayGrid;