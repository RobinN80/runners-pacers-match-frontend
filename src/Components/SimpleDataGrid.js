import React, {useState, useEffect} from 'react';
import { Runners, Pacers } from "../shared/runners-pacers-mock-data";
import '../CompnentCSS/Grid.css'
// import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';

const columnsRunners = [
    {field: 'name', headerName: 'Runner Initials', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'runnerDistance', headerName: 'Distance', width: 150},
    {field: 'runner50TimeEstimate', headerName: 'Time Estimate 50', width: 150},
    {field: 'runner100TimeEstimate', headerName: 'Time Estimate 100', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Course Familiarity', width: 150},
]

const columnsPacers = [
    {field: 'name', headerName: 'Pacer Initials', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'pacersDistance', headerName: 'Distance', width: 150},
    {field: 'pacerTimeEstimate', headerName: 'Time Estimate', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Course Familiarity', width: 150},
]


const SimpleDataGrid = (props) => {
    const [rowData, setRowData ] = useState([]);
    const [columnData, setColumnData ] = useState(columnsRunners)
    const [ isMobile, setIsMobile] = useState(true);
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

//  const {participantType} = props;
let windowWidth = window.innerWidth;

useEffect(() =>{
    const handleWindowSize=()=>{
        
        if (windowWidth <= 769){
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    
    //
    window.addEventListener('resize', handleWindowSize);
    handleWindowSize();
    return () => window.removeEventListener('resize', handleWindowSize);
});
    const singular = participantType==="runners"? "Runner": "Pacer"

    console.log(isMobile, 'ismobile', windowWidth);
    const renderDeskTopView = () => {
        return(
            <div style={{height: 400, width: '100%'}}>
                <table border="1" className='main-table'>
                        <thead>
                            <tr>
                                {columnData.map((column) => (
                                    <th key={column.field}>{column.headerName}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rowData.map((row)=> (
                                <tr key={row.id}>
                                    {columnData.map((column)=> (
                                        <td key={row.id + column.field}>{row[column.field]}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                </table>
            </div>
        );
    }

    const renderMobileView = () => {
        return(
            <div style={{height: 400, width: '100%'}}>
                
            <table className="main-table mobile-table">
                {rowData.map((row) => (
                <thead key={row.id} className='mobile-table'>
                    {columnData.map((column) => (
                        <tr key={row.id + column.field}>
                            <div><h3>{column.headerName}:</h3></div>
                            <p>{row[column.field]}</p>
                        </tr>
                    ))}
                    <button>{`Email ${singular}`}</button>
                </thead> 
                ))}
            </table>
            </div>
//             <Box className='main-table mobile-table' sx={{ minWidth: 275 }}>
//             {Runners.map((runner) => (
//                 <Card key={runner.id}>
//                 <CardContent>
//                 {columnsRunners.map((column) => (
//                     <div key={runner.id + column.field}>
//                         <h3>{column.headerName}:</h3>
//                         <p sx={{ fontSize: 12 }}>{runner[column.field]}</p>
//                     </div>
//                 ))}
//                 <CardActions>
//                     <Button size='small'>Email to Connect</Button>
//                 </CardActions>
//                 </CardContent>
//             </Card>
//             ))}
//   </Box>
        )
    }


    return(
    <>
        <h2>{participantType.toUpperCase()}</h2>
        {isMobile ? renderMobileView() : renderDeskTopView()}
    </> 
        
    );
};

export default SimpleDataGrid;