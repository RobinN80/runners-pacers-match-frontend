import React, {useState, useEffect} from 'react';
import { Runners, Pacers } from "../shared/runners-pacers-mock-data";
import '../CompnentCSS/Grid.css'
import {Box, Card, CardActions, CardContent, Button, Typography} from '@mui/material';

const columnsRunners = [
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'gender', headerName: 'Gender', width: 150},
    {field: 'partnerGenderPreference', headerName: 'Prefered Gender', width: 150},
    {field: 'runnerDistance', headerName: 'Distance', width: 150},
    {field: 'runner50TimeEstimate', headerName: 'Time Estimate 50', width: 150},
    {field: 'runner100TimeEstimate', headerName: 'Time Estimate 100', width: 150},
    {field: 'familiarityOfCourse', headerName: 'Familiarity With Course', width: 150},
]


const SimpleDataGrid = (props) => {
const [ isMobile, setIsMobile] = useState(true);
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

    console.log(isMobile, 'ismobile', windowWidth);
    const renderDeskTopView = () => {
        return(
            <table border="1" className='main-table'>
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
        );
    }

    const renderMobileView = () => {
        return(
            <table className="main-table mobile-table">
                {Runners.map((runner) => (
                <thead key={runner.id} className='mobile-table'>
                    {columnsRunners.map((column) => (
                        <tr key={runner.id + column.field}>
                            <div><h3>{column.headerName}:</h3></div>
                            <p>{runner[column.field]}</p>
                        </tr>
                    ))}
                </thead> 
                ))}
            </table>
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
        {isMobile ? renderMobileView() : renderDeskTopView()}
    </> 
        
    );
};

export default SimpleDataGrid;