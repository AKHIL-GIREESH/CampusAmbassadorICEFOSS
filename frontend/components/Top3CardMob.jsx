const Top3CardMob = ({ Name, ID, Points, Img, Rank }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "30vw",
        height: "50vh",
        border: "1px solid",
        transform: "translateY(50px)",
      }}
    >
      <img src={Img} style={{ transform: "translateY(-50px)" }}></img>
      <div style={{ border: "1px solid" }}>
        <p>A Pretty Dang Long Name</p>
        <p>ICE-xxXxx</p>
        <p>42069</p>
      </div>
    </div>
  );
};

export default Top3CardMob;
