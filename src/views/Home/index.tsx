import React from "react";
import About from "./About";
import ConceptSelector from "./ConceptSelector";
import Connection from "./Connection";
import Sources from "./Sources";

export interface HomeProps {
  aboutRef: React.MutableRefObject<any>;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { aboutRef } = props;

  return (
    <div className="home__container" ref={aboutRef}>
      <About />
      <ConceptSelector />
      <Connection />
      <Sources />
    </div>
  );
};

export default Home;
