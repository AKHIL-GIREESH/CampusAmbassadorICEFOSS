import NotTop3CardPC from "./NotTop3CardPC";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const NotTop3 = ({ data }) => {
  useEffect(() => {
    gsap.fromTo(
      ".table div",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        delay: 2,
      }
    );
  }, []);
  return (
    <div
      className="table"
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
