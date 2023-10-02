import "./Introduction.css";
import headshot from "../Image/headshot.jpg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Introduction = () => {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Frontend-Developer", "Backend-Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div className="introduction-container">
      <div className="image-text-continer">
        {/* <div className="intro-picture-container">
          <img
            style={{ width: "10%", height: "10%" }}
            src={headshot}
            alt="headshot"
          ></img>
        </div> */}
        <div className="intro-text-container">
          <h1>Kabir here!</h1>
          <h2>and I'm a</h2>
          <span
            style={{ fontWeight: "bold", color: "white", fontSize: "50px" }}
          >
            {text}
          </span>
          <span style={{ fontSize: "50px", color: "black" }}>
            <Cursor cursorStyle="/" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
