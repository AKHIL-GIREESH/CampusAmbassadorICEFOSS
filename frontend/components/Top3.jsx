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
        Name={data[1][2]}
        ID={data[1][6]}
        Points={data[1][7]}
        Img={Second}
        Rank={2}
      />
      <Top3CardPC
        Name={data[0][2]}
        ID={data[0][6]}
        Points={data[0][7]}
        Img={First}
        Rank={1}
      />
      <Top3CardPC
        Name={data[2][2]}
        ID={data[2][6]}
        Points={data[2][7]}
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
        Name={data[1][2]}
        ID={data[1][6]}
        Points={data[1][7]}
        Img={Second}
        Rank={2}
      />
      <Top3CardMob
        Name={data[0][2]}
        ID={data[0][6]}
        Points={data[0][7]}
        Img={First}
        Rank={1}
      />
      <Top3CardMob
        Name={data[2][2]}
        ID={data[2][6]}
        Points={data[2][7]}
        Img={Third}
        Rank={3}
      />
    </div>
  );
};

export default Top3;
