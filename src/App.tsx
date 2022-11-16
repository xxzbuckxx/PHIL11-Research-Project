import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

import "./App.scss";
import FadeInWhenVisible from "./components/FadeInWhenVisible";
import ConceptNo1 from "./views/Home/ConceptNo1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="app__container">
        <Navbar />
        <FadeInWhenVisible>
          <Home />
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default App;
