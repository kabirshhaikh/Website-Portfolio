import "./App.css";
import Introduction from "./Components/Introduction";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import DrawerAppBar from "./Components/DrawerAppBar";

function App() {
  return (
    <div className="App">
      <div className="header">
        <DrawerAppBar />
      </div>
      <div id="About" className="introduction">
        <Introduction />
      </div>
      <div id="Experience" className="project">
        <Experience />
      </div>
      <div id="Contact" className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
