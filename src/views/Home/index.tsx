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
    <div className="home__container">
      <FadeInWhenVisible>
        <About aboutRef={aboutRef} />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ConceptNo1 />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <ConceptNo2 />
      </FadeInWhenVisible>
    </div>
  );
};

export default Home;
