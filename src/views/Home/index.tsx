import React from "react";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";
import About from "./About";
import ConceptNo1 from "./ConceptNo1";
import ConceptNo2 from "./ConceptNo2";

export interface HomeProps {
  aboutRef: React.MutableRefObject<any>;
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { aboutRef } = props;

  return (
    <div className="home__container" ref={aboutRef}>
      <FadeInWhenVisible>
        <About />
      </FadeInWhenVisible>
      <ConceptNo1 />
      <ConceptNo2 />
    </div>
  );
};

export default Home;
