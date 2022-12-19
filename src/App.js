import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <TechStack />
      <SocialLinks />
    </div>
  );
}

export default App;
