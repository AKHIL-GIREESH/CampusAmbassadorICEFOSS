import First from "../src/img/first.png";
import Second from "../src/img/second.png";
import Third from "../src/img/third.png";
import Top3CardMob from "./Top3CardMob";
import Top3CardPC from "./Top3CardPC";

const Top3 = ({ data }) => {
  let cond = window.innerHeight < window.innerWidth;
  return cond ? (
    <div
      style={{
        display: "flex",
        width: "100vw",
        // border: "1px solid",
        justifyContent: "space-evenly",
        perspective: "1000px",
      }}
    >
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[0][2]}
        Points={42069}
        Img={Second}
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
        Img={Third}
      />
    </div>
  ) : (
    <Top3CardMob
      Name={"A Pretty Dang Long Name"}
      ID={data[2][2]}
      Points={42069}
      Img={First}
      Rank={1}
    />
  );
};

export default Top3;
