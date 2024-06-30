const NotTop3 = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        border: "1px solid",
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
        }}
      >
        <p>Rank</p>
        <p>Name</p>
        <p>ID</p>
        <p>Points</p>
      </div>
      {data.map((item) => (
        <div
          style={{
            width: "90vw",
            height: "10vh",
            border: "1px solid",
          }}
        >
          {item[2]}
          <br />
        </div>
      ))}
    </div>
  );
};

export default NotTop3;
