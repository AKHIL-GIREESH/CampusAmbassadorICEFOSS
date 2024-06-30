import First from "../src/img/first.png";

const Top3 = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        // border: "1px solid",
        justifyContent: "space-evenly",
      }}
    >
      {data.map((item) => (
        <div
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
          <img src={First} style={{ height: "80%", alignSelf: "center" }}></img>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>
              <b>A Pretty Dang Long Name</b>
            </p>
            <p>Points</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{item[2]}</p>
            <p>
              <b>42069</b>
            </p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Top3;
