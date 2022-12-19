import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
