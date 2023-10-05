import "./Introduction.css";
import headshot from "../Image/headshot.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Introduction = () => {
  const [text] = useTypewriter({
    words: ["Backend-Developer", "Frontend-Developer", "Problem Solver"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="introduction-container">
      <div className="intro-image-text-container">
        <div className="image-container">
          <img
            style={{ width: "50%", height: "50%", borderRadius: "10%" }}
            src={headshot}
            alt="headshot"
          />
        </div>

        <div className="intro-text-container">
          <span style={{ fontWeight: "bold", color: "red", fontSize: "50px" }}>
            {text}
          </span>
          <span style={{ fontSize: "50px", color: "black" }}>
            <Cursor cursorStyle="/" />
          </span>
          <h3>
            Greetings! I'm Kabir Shaikh, a software engineering virtuoso on a
            mission to turn every complex challenge into a triumph of code.
            <br />
            Armed with expertise in cloud, databases, and an arsenal of
            programming languages, I'm your go-to expert for crafting
            exceptional web solutions. Join me in transforming ideas into
            digital marvels.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
