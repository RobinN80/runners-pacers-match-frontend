import React, {useEffect, useState} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionActions from '@mui/material/AccordionActions';
import { Runners, Pacers } from '../shared/runners-pacers-mock-data';
import SendEmail from './Forms/SendEmail';
import '../CompnentCSS/Accordion.css';

export default function BasicAccordion(props) {
    const [data, setData] = useState([]);
    const [emailFormOpen, setEmailFormOpen] = useState(false);
    const [sendeeId, setSendeeId] =useState(null);
    const [sendeeName, setSendeeName] =useState('');
    const {participantType} = props;

    const handleClick = (participant) => {
        // alert(` ${participantType} id number: ${e.target.value}`);
        // console.log(participant, 'handleclick');
        setEmailFormOpen(true);
        setSendeeId(participant.id);
        setSendeeName(participant.name);
    };

    const handleClose = () => {
        setSendeeId(null);
        setSendeeName('');
    };

    useEffect(() => {
        if(participantType === 'runners'){
            setData(Runners)
        }
        if(participantType === 'pacers'){
            setData(Pacers)
        }
    }, [participantType]);
  return (
    <div style={{margin: "20px 10px 0 10px"}}>
        <h3>{participantType.toUpperCase()}</h3>
        {data.map((participant) => (
            <Accordion key={participant.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${participant.id}-header`}
                  id={`${participant.id}-header`}
                >
                       <Typography >Name: {participant.name},</Typography> 
                       <Typography >{participant.distance ? `Distance: ${participant.distance},` : ''}</Typography>
                       <Typography>Time Estimate: {participant.timeEstimate}</Typography> 
                </AccordionSummary>
                <AccordionDetails>
                        <Typography>Gender: {participant.gender}</Typography> 
                       <Typography>Prefered Gender of Partner: {participant.partnerGenderPreference}</Typography>
                       <Typography>Familiarity of Course: {participant.familiarityOfCourse}</Typography>
                       <Typography>Additional Info: {participant.moreInfo}</Typography> 
                </AccordionDetails>
                <AccordionActions>
                        <button onClick={() => handleClick(participant)} >{`Email ${participant.name}`}</button>
                </AccordionActions>
            </Accordion>
        ))}
        <SendEmail open={emailFormOpen} setOpen={() => setEmailFormOpen()} sendeeId={sendeeId} sendeeName={sendeeName} handleClose={handleClose}/>
    </div>
  );
}