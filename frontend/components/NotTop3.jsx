import NotTop3CardPC from "./NotTop3CardPC";

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
      <NotTop3CardPC
        Rank={"Rank"}
        Name={"Name"}
        ID={"ID"}
        Points={"Points"}
        fw={"600"}
      />
      {data.map((item, i) => (
        <NotTop3CardPC
          Rank={i + 4}
          Name={"A Pretty Dang Long Name"}
          ID={item[2]}
          Points={42069}
        />
      ))}
    </div>
  );
};

export default NotTop3;
