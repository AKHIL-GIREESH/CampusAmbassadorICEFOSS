import First from "../src/img/first.png";
import Top3CardPC from "./Top3CardPC";

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
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[0][2]}
        Points={42069}
        Img={First}
      />
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[1][2]}
        Points={42069}
        Img={First}
      />
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[2][2]}
        Points={42069}
        Img={First}
      />
    </div>
  );
};

export default Top3;
