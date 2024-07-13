import Standing from "../components/Standings";
import "./App.css";
import Logo from "./img/ice_logo_white_2_optimized.png";

function App() {
  return (
    <>
      <img
        src={Logo}
        style={{
          maxWidth: "100px",
          alignSelf: "center",
          margin: "10px auto",
        }}
      ></img>
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "20px" }}
      >
        LEADERBOARDS
      </h1>
      <Standing />
    </>
  );
}

export default App;
