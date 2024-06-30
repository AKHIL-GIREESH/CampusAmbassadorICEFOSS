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
          }}
        >
          <img src={First} style={{ height: "70%" }}></img>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>A Pretty Dang Long Name</p>
            <p>Points</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>{item[2]}</p>
            <p>42069</p>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Top3;
