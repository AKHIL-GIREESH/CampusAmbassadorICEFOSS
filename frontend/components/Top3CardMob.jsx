import { useEffect, useRef } from "react";
import gsap from "gsap";

const Top3CardMob = ({ Name, ID, Points, Img, Rank }) => {
  let height = 50 - (Rank - 1) * 5;

  useEffect(() => {
    const tlLP = gsap.timeline();
    gsap.fromTo(
      "#Rank1",
      {
        height: 0,
      },
      {
        height: "50vh",
        borderRadius: "20px 20px 0 0 ",
        duration: 3,
      }
    );
    gsap.fromTo(
      "#Rank2",
      {
        height: 0,
      },
      {
        height: "45vh",
        borderRadius: "20px 20px 0 10px ",
        duration: 3,
      }
    );
    gsap.fromTo(
      "#Rank3",
      {
        height: 0,
      },
      {
        height: "40vh",
        borderRadius: "20px 20px 10px 0px ",
        duration: 3,
      }
    );
    gsap.fromTo(
      ".rankBars>img",
      {
        opacity: 0,
        scale: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );

    gsap.fromTo(
      ".rankBars>div",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );

    gsap.fromTo(
      ".rankBars>img",
      {
        y: -70,
      },
      {
        y: -60,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div
      className="rankBars"
      id={`Rank${Rank}`}
      style={{
        background:
          "linear-gradient(180deg,rgba(0, 0, 0, 0.7) 50%,rgba(0, 0, 0, 0.5) 99.96%)",
        backdropFilter: "blur(20px)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "30vw",
        height: `${height}vh`,
        // transform: "translateY(50px)",
      }}
    >
      <img src={Img} style={{ transform: "translateY(-70px)" }}></img>
      <div
        style={{
          height: "fit-content",
          marginBottom: "30px",
        }}
      >
        <p style={{ marginBottom: "5px", fontWeight: "bold" }}>{Name}</p>
        <p style={{ marginBottom: "15px" }}>{ID}</p>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {Points}
        </p>
      </div>
    </div>
  );
};

export default Top3CardMob;
