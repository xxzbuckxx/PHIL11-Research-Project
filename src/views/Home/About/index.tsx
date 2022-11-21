import React from "react";
import chalmerPhoto from "/davidchalmers.jpg";

import "./index.scss";

const About: React.FC = () => {
  return (
    <div className="about__container">
      <div className="about__container--left">
        <h1>
          <i className="fa-solid fa-magnifying-glass"></i> Who is David
          Chalmers?
        </h1>
        <p>
          Chalmers is a Professor of Philosophy at the Australian National
          University as well as New York University. Chalmers is a cognitive
          scientist and philosopher and who focuses his work in philosophy of
          language, philosophy of mind, and their points of overlap with
          cognitive science.
        </p>
      </div>
      <div className="about__container--right">
        <img src={chalmerPhoto} />
      </div>
    </div>
  );
};

export default About;
