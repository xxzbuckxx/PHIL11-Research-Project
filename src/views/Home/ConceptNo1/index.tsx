import React from "react";
import imgAtom from "/fundamental-atom.jpg";
import imgSpace from "/fundamental-space.png";
import imgTime from "/fundamental-time.jpg";
import imgCharge from "/fundamental-charge.jpg";
import imgBrain from "/fundamental-brain.png";
import imgShirt from "/laws-shirt.png";

import "./index.scss";
import FadeInWhenVisible from "../../../components/FadeInWhenVisible";

const ConceptNo1: React.FC = () => {
  return (
    <div className="conceptno1__container">
      <h1> - *-.;^ Consciousness is Fundamental --&_./ </h1>
      <FadeInWhenVisible>
        <div className="conceptno1__container--fundamentals__container">
          <img src={imgAtom} />
          <img src={imgSpace} />
          <img src={imgTime} />
          <img src={imgCharge} />
          <img src={imgBrain} className="special" />
        </div>
        <p>
          Similar to mass, space, time, or charge, conscioussness is a
          fundamental building block of the universe.
        </p>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <p>
          <i>-- Why? --</i>
        </p>
        <p>
          Since you can not explain consciousness in terms of the other
          fudamental elements, it must be its own.
        </p>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="conceptno1__container--shirt-explanation__container">
          <img src={imgShirt} />
          <div>
            <h4>Fundamental Laws</h4>
            <p>
              The laws of the other fundamental elements are so simple they can
              be explained on the front of a t-shirt.
            </p>
            <p>
              The same should apply for the fundamental element of conciousness.
            </p>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <div className="conceptno1__container--class-connection__container">
          <h2>How Does this Connect Back to Intro to Philosophy?</h2>
          <p>Well basically it does.</p>
        </div>
      </FadeInWhenVisible>
    </div>
  );
};

export default ConceptNo1;
