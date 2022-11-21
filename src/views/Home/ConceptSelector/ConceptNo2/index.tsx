import React from "react";
import FadeInWhenVisible from "../../../../components/FadeInWhenVisible";
import imgMicrobe from "/concious-microbe.png";

import "./index.scss";

const ConceptNo2: React.FC = () => {
  return (
    <div className="conceptno2__container">
      <h1>Consciousness is Universal</h1>

      <FadeInWhenVisible>
        <div className="conceptno2__container--everything__container">
          <div className="conceptno2__container--everything__container--left">
            <h4>Everything is Concious!</h4>
            <p>
              Everything including microbes, particles, tree bark, a stapler are
              varying levels of concious.
            </p>
            <p>
              This idea is called{" "}
              <i>
                <b>panpsychism</b>
              </i>
              .
            </p>
          </div>
          <div className="conceptno2__container--everything__container--right">
            <img src={imgMicrobe}></img>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <p>
          There could be a link between quantity of information processing
          happening and level of consciousness.
        </p>
        <p>
          <i>more information</i> = <i>more concious</i>
        </p>
      </FadeInWhenVisible>
    </div>
  );
};

export default ConceptNo2;
