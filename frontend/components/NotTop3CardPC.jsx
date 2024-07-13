const NotTop3CardPC = ({ Rank, Name, ID, Points, fw }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "90vw",
        height: "8vh",
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "white",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        background:
          "linear-gradient(180deg,rgba(255, 255, 255, 0.6) 50%,rgba(255, 255, 255, 0.4) 99.96%)",
        backdropFilter: "blur(20px)",
        marginBottom: "5px",
        borderRadius: "5px",
        color: "black",
        fontWeight: fw,
      }}
    >
      {window.innerHeight < window.innerWidth ? (
        <>
          <p style={{ width: "5%" }}>{Rank}</p>
          <p style={{ width: "65%" }}>{Name}</p>
          <p style={{ width: "20%" }}>{ID}</p>
          <p style={{ width: "10%" }}>{Points}</p>
        </>
      ) : (
        <>
          <p style={{ width: "10%" }}>{Rank}</p>
          <div style={{ width: "75%" }}>
            <p style={{ width: "100%", fontWeight: "bold" }}>{Name}</p>
            <p style={{ width: "100%" }}>{ID}</p>
          </div>
          <p style={{ width: "15%" }}>{Points}</p>
        </>
      )}
    </div>
  );
};

export default NotTop3CardPC;
