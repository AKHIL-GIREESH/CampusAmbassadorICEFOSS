import Standing from "../components/Standings";
import "./App.css";

function App() {
  return (
    <>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "800", marginBottom: "20px" }}
      >
        LEADERBOARDS
      </h1>
      <Standing />
    </>
  );
}

export default App;
