import {useState} from 'react';
import ParticipantDisplayGrid from "./Grid";
import SimpleDataGrid from './SimpleDataGrid';
// import InputForm from './InputForm';
import InputFormRunners from './Forms/InputFormRunners';
// import FilterDisplay from './FilterDisplay';
// const participantTypes = [runner, pacer];

const Main = () => {
 const [participantType, setParticipantType] = useState('');
 const [participantFormType, setParticipantFormType] = useState('')
//  const [runnerFormOpen, setRunnerFormOpen] =useState(false);
//  const [pacerFormOpen, setPacerFormOpen] = useState(false);
 const [open, setOpen] = useState(false);

 
 const handleClickRunnerForm = () => {
    setOpen(true);
    setParticipantFormType('runner');
}
const handleClickPacerForm = () =>{
    setOpen(true);
    setParticipantFormType('pacer');
}
// const handleClose = () => {
//     setOpen(false)
// }

 return(
    <div>
        <div>
            <span>
                <button 
                onClick={() => handleClickRunnerForm()} 
                ><strong>Runners</strong> looking for a pacer?</button>
                <button onClick={() => handleClickPacerForm()}><strong>Pacers</strong> looking for a runner?</button>
        </span>
       </div>
       <div>
        <span>
            <button onClick={()=>(setParticipantType('pacers'))}>SEE LIST: <strong>Runners</strong> looking for a pacer?</button>
            <button onClick={()=>(setParticipantType('runners'))}>SEE LIST: <strong>Pacers</strong> looking for a runner?</button>
        </span>
       </div>
       {/* <FilterDisplay /> */}
       {/* <ParticipantDisplayGrid participantType={participantType}/> */}
       <SimpleDataGrid participantType={participantType} />
       <InputFormRunners setOpen={() => setOpen()} participantFormType={participantFormType} open={open} />
    </div>
 )
}

export default Main;