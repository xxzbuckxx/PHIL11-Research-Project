import React from "react";
import FadeInWhenVisible from "../../components/FadeInWhenVisible";
import About from "./About";
import ConceptNo1 from "./ConceptNo1";
import ConceptNo2 from "./ConceptNo2";

const Home: React.FC = () => {
  return (
    <div className="home__container">
      <FadeInWhenVisible>
        <About />
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
