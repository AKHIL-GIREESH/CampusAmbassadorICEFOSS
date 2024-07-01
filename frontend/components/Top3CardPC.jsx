import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Top3CardPC = ({ Name, ID, Points, Img }) => {
  useEffect(() => {
    gsap.fromTo(
      ".cardTurn",
      {
        rotateY: 360,
      },
      {
        rotateY: 0,
        duration: 0.8,
        // stagger: 0.1,
      }
    );
  }, []);

  return (
    <div
      className="cardTurn"
      style={{
        width: "26vw",
        border: "1px solid",
        height: "45vh",
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        transformStyle: "preserve-3d",
      }}
    >
      <img src={Img} style={{ height: "80%", alignSelf: "center" }}></img>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <b>{Name}</b>
        </p>
        <p>Points</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
