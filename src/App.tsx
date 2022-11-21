import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

import "./App.scss";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

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
