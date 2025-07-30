import NavBar from "./components/NavBar/navbar"
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skill";
import Works from "./components/Works/works";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
