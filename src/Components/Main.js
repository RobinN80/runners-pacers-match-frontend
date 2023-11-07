import {useState, useEffect} from 'react';
import ParticipantDisplayGrid from "./Grid";

const Main = () => {
 const [participantType, setParticipantType] = useState('');


 return(
    <div>
        <div>
        <span>
        <button><strong>Runners</strong> looking for a pacer?</button>
        <button><strong>Pacers</strong> looking for a runner?</button>
       </span>
       </div>
       <div>
       <span>
        <button onClick={()=>(setParticipantType('pacers'))}>SEE LIST: <strong>Runners</strong> looking for a pacer?</button>
        <button onClick={()=>(setParticipantType('runners'))}>SEE LIST: <strong>Pacers</strong> looking for a runner?</button>
       </span>
       </div>
       <ParticipantDisplayGrid participantType={participantType}/>
    </div>
 )
}

export default Main;