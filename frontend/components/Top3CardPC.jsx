import { useEffect } from "react";

const Top3CardPC = ({ Name, ID, Points, Img }) => {
  useEffect(() => {}, []);

  return (
    <div
      className="cardTurn"
      style={{
        width: "26vw",
        border: "1px solid",
        height: "45vh",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img src={Img} style={{ height: "80%", alignSelf: "center" }}></img>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <b>{Name}</b>
        </p>
        <p>Points</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{ID}</p>
        <p>
          <b>{Points}</b>
        </p>
      </div>
      <br />
    </div>
  );
};

export default Top3CardPC;
