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
      <p style={{ width: "5%" }}>
        <b>{Rank}</b>
      </p>
      <p style={{ width: "65%" }}>
        <b>{Name}</b>
      </p>
      <p style={{ width: "20%" }}>
        <b>{ID}</b>
      </p>
      <p style={{ width: "10%" }}>
        <b>{Points}</b>
      </p>
    </div>
  );
};

export default NotTop3CardPC;
