import "./App.css";
import Introduction from "./Components/Introduction";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import DrawerAppBar from "./Components/DrawerAppBar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <DrawerAppBar />
      </div>
      <div id="Introduction" className="introduction">
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
