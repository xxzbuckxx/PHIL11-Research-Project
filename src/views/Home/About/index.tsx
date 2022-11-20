import React from "react";
import chalmerPhoto from "/davidchalmers.jpg";

import "./index.scss";

const About: React.FC = () => {
  return (
    <div className="about__container">
      <div className="about__container--left">
        <h1>
          <i className="fa-solid fa-magnifying-glass"></i> Who is David Chalmer?
        </h1>
        <p>
          Chalmers holds the title of Professor of Philosophy and Director of
          the Centre for Consciousness at the Australian National University,
          and is a Professor of Philosophy at New York University. Chalmers is
          both a philosopher and cognitive scientist who focuses his work in
          philosophy of mind, philosophy of language, and their points of
          overlap with cognitive science.
        </p>
      </div>
      <div className="about__container--right">
        <img src={chalmerPhoto} />
      </div>
    </div>
  );
};

export default About;
