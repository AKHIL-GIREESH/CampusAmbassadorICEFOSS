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
        Rank={2}
      />
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[1][2]}
        Points={42069}
        Img={First}
        Rank={1}
      />
      <Top3CardPC
        Name={"A Pretty Dang Long Name"}
        ID={data[2][2]}
        Points={42069}
        Img={Third}
        Rank={3}
      />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "center",
        height: "60vh",
        // border: "1px solid",
        alignItems: "end",
      }}
    >
      <Top3CardMob
        Name={"A Pretty Dang Long Name"}
        ID={data[0][2]}
        Points={42069}
        Img={Second}
        Rank={2}
      />
      <Top3CardMob
        Name={"A Pretty Dang Long Name"}
        ID={data[1][2]}
        Points={42069}
        Img={First}
        Rank={1}
      />
      <Top3CardMob
        Name={"A Pretty Dang Long Name"}
        ID={data[2][2]}
        Points={42069}
        Img={Third}
        Rank={3}
      />
    </div>
  );
};

export default Top3;
