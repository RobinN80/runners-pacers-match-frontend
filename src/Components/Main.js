import {useState} from 'react';
import ParticipantDisplayGrid from "./Grid";
import SimpleDataGrid from './SimpleDataGrid';
// import InputForm from './InputForm';
import InputFormRunners from './Forms/InputFormRunners';
import InputFormPacers from './Forms/InputFormPacers';
import FilterDisplay from './FilterDisplay';
import BasicAccordion from './Accordian';
import {Stack} from '@mui/material';
// const participantTypes = [runner, pacer];

const Main = () => {
 const [participantType, setParticipantType] = useState('');
 const [participantFormType, setParticipantFormType] = useState('')
//  const [runnerFormOpen, setRunnerFormOpen] =useState(false);
//  const [pacerFormOpen, setPacerFormOpen] = useState(false);
 const [runnerFormOpen, setRunnerFormOpen] = useState(false);
 const [pacerFormOpen, setPacerFormOpen] = useState(false);

 
 const handleClickRunnerForm = () => {
    setRunnerFormOpen(true);
    setParticipantFormType('runner');
}
const handleClickPacerForm = () =>{
    setPacerFormOpen(true);
    setParticipantFormType('pacer');
}
// const handleClose = () => {
//     setOpen(false)
// }

 return(
    <div>
        <div>
            <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <button 
                onClick={() => handleClickRunnerForm()} 
                ><strong>Runners</strong> looking for a pacer?</button>
                <button onClick={() => handleClickPacerForm()}><strong>Pacers</strong> looking for a runner?</button>
            </Stack>
       </div>
       {/* <div>
        <span>
            <button onClick={()=>(setParticipantType('pacers'))}>SEE LIST: <strong>Runners</strong> looking for a pacer?</button>
            <button onClick={()=>(setParticipantType('runners'))}>SEE LIST: <strong>Pacers</strong> looking for a runner?</button>
        </span>
       </div> */}
       {/* <FilterDisplay /> */}
       {/* <ParticipantDisplayGrid participantType={participantType}/> */}
       {/* <SimpleDataGrid participantType={participantType} /> */}
       
        <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={2}
        >
            <BasicAccordion participantType="runners" />
            <BasicAccordion participantType="pacers" />

       </Stack>
       <InputFormRunners setOpen={() => setRunnerFormOpen()} participantFormType={participantFormType} open={runnerFormOpen} />
       <InputFormPacers setOpen={() => setPacerFormOpen()} participantFormType={participantFormType} open={pacerFormOpen}/>
    </div>
 )
}

export default Main;