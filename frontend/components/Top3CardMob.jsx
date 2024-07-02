const Top3CardMob = ({ Name, ID, Points, Img, Rank }) => {
  let height = 50 - (Rank - 1) * 5;
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "30vw",
        height: `${height}vh`,
        border: "1px solid",
        // transform: "translateY(50px)",
      }}
    >
      <img src={Img} style={{ transform: "translateY(-70px)" }}></img>
      <div
        style={{
          height: "fit-content",
          marginBottom: "30px",
        }}
      >
        <p style={{ marginBottom: "5px", fontWeight: "bold" }}>{Name}</p>
        <p style={{ marginBottom: "15px" }}>{ID}</p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {Points}
        </p>
      </div>
    </div>
  );
};

export default Top3CardMob;
