import "./App.css";
import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

// -> Header
// ->Main Section:
//   - Introduction
//   - Projects
//    - Contact Me

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div id="Intro" className="introduction">
        <Introduction />
      </div>
      <div id="Project" className="project">
        <Project />
      </div>
      <div id="Contact" className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
