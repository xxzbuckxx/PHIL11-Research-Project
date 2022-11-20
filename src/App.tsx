import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

import "./App.scss";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import ConceptNo1 from "./views/Home/ConceptNo1";

function App() {
  const aboutRef = useRef<HTMLHeadElement>(null);

  function handleScrollClick() {
    aboutRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="app">
      <div className="app__container">
        <Navbar scrollClick={handleScrollClick} />
        <Home aboutRef={aboutRef} />
      </div>
    </div>
  );
}

export default App;
