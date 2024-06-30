const NotTop3CardPC = ({ Rank, Name, ID, Points }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        height: "10vh",
        border: "1px solid",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <p style={{ width: "5%" }}>{Rank}</p>
      <p style={{ width: "65%" }}>{Name}</p>
      <p style={{ width: "20%" }}>{ID}</p>
      <p style={{ width: "10%" }}>{Points}</p>
    </div>
  );
};

export default NotTop3CardPC;
