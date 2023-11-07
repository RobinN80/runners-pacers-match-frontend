// import logo from './logo.svg';
import './App.css';
import ParticipantDisplayGrid from './Components/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <span>
        <button><strong>Runners</strong> looking for a pacer?</button>
        <button><strong>Pacers</strong> looking for a runner?</button>
       </span>
       <ParticipantDisplayGrid />
      </header>
    </div>
  );
}

export default App;
