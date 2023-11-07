import ParticipantDisplayGrid from "./Grid";

const Main = () => {
 return(
    <div>
         <span>
        <button><strong>Runners</strong> looking for a pacer?</button>
        <button><strong>Pacers</strong> looking for a runner?</button>
       </span>
       <ParticipantDisplayGrid />
    </div>
 )
}

export default Main;