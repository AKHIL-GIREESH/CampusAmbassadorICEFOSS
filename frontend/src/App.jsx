import Standing from "../components/Standings";
import ParticipantTable from "../components/data";
import "./App.css";


function App() {
  /*return (
    <>
      <h1>LEADERBOARDS</h1>
      <Standing />
    </>
  );
  */
 return(
  <div className="App">
  <ParticipantTable />
</div>
 );
}

export default App;
