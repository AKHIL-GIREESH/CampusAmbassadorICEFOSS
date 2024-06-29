const Top3 = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        border: "1px solid",
        justifyContent: "space-evenly",
      }}
    >
      {data.map((item) => (
        <div style={{ width: "25vw", border: "1px solid", height: "40vh" }}>
          {item[2]}
          <br />
        </div>
      ))}
    </div>
  );
};

export default Top3;
