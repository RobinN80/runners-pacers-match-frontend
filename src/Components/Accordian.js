import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionActions from '@mui/material/AccordionActions';
import { Runners, Pacers } from '../shared/runners-pacers-mock-data';

export default function BasicAccordion(props) {
    const [data, setData] = useState([]);
    const {participantType} = props;

    const handleClick = (e) => {
        alert(`Sending email to ${participantType} id number: ${e.target.value}`);
        // console.log(e, 'handleclick');
    }

    useEffect(() => {
        if(participantType === 'runners'){
            setData(Runners)
        }
        if(participantType === 'pacers'){
            setData(Pacers)
        }
    }, [participantType]);
  return (
    <div style={{margin: "20px 10px 0 0"}}>
        <h3>{participantType.toUpperCase()}</h3>
        {data.map((participant) => (
            <Accordion key={participant.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${participant.id}-header`}
                  id={`${participant.id}-header`}
                >
                       <Typography>{participant.name}</Typography> 
                       <Typography >{participant.distance ? participant.distance : ''}</Typography>
                       <Typography>{participant.timeEstimate}</Typography> 
                </AccordionSummary>
                <AccordionDetails>
                        <Typography>{participant.gender}</Typography> 
                       <Typography>{participant.partnerGenderPreference}</Typography>
                       <Typography>{participant.familiarityOfCourse}</Typography>
                       <Typography>{participant.moreInfo}</Typography> 
                </AccordionDetails>
                <AccordionActions>
                        <button onClick={handleClick} value={participant.id}>{`Email ${participant.name}`}</button>
                </AccordionActions>
            </Accordion>
        ))}
    </div>
  );
}