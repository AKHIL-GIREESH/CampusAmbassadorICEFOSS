import { useEffect } from "react";
import gsap from "gsap";

const Top3CardPC = ({ Name, ID, Points, Img, Rank }) => {
  useEffect(() => {
    const tlLP = gsap.timeline();
    tlLP.fromTo(
      ".cardTurn",
      {
        rotateY: 1600,
        y: 200,
      },
      {
        rotateY: 0,
        y: 0,
        duration: 3,
        // stagger: 0.1,
      }
    );
    tlLP.fromTo(
      ".cardTurn div",
      {
        opacity: 0,
        y: 10,
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.2,
      }
    );

    tlLP.to(".cardTurn img", {
      y: 10,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  return (
    <div
      className="cardTurn"
      id={`Rank${Rank}PC`}
      style={{
        width: "26vw",
        height: "45vh",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        transformStyle: "preserve-3d",
        background:
          "linear-gradient(180deg,rgba(0, 0, 0, 0.7) 50%,rgba(0, 0, 0, 0.5) 99.96%)",
        backdropFilter: "blur(20px)",
        // backfaceVisibility: "hidden",
      }}
    >
      <img src={Img} style={{ height: "80%", alignSelf: "center" }}></img>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          opacity: 0,
          // scale: 0,
        }}
      >
        <p>
          <b>{Name}</b>
        </p>
        <p>Points</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          opacity: 0,
          // scale: 0,
        }}
      >
        <p>{ID}</p>
        <p>
          <b>{Points}</b>
        </p>
      </div>
      <br />
    </div>
  );
};

export default Top3CardPC;
