const NotTop3 = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        // border: "1px solid",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "90vw",
          height: "10vh",
          border: "1px solid",
          borderRadius: "15px 15px 0 0",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <p style={{ width: "5%" }}>
          <b>Rank</b>
        </p>
        <p style={{ width: "65%" }}>
          <b>Name</b>
        </p>
        <p style={{ width: "20%" }}>
          <b>ID</b>
        </p>
        <p style={{ width: "10%" }}>
          <b>Points</b>
        </p>
      </div>
      {data.map((item, i) => (
        <div
          style={{
            width: "90vw",
            height: "10vh",
            border: "1px solid",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p style={{ width: "5%" }}>{i + 4}</p>
          <p style={{ width: "65%" }}>A Pretty Dang Long Name</p>
          <p style={{ width: "20%" }}>{item[2]}</p>
          <p style={{ width: "10%" }}>42069</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default NotTop3;
