import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import GetInvolved from './components/GetInvolved/GetInvolved';
import Stats from "./components/Stats/Stats";
import Events from "./components/Events/Events";
import Contact from "./components/Contact/Contact";

const App = () => {
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);
  return (
    <div>
      <Navbar scrollY={scrollY}/>
      <Home />
      <About />
      <GetInvolved />
      <Stats />
      <Events />
      <Contact />
    </div>
  )
};

export default App;