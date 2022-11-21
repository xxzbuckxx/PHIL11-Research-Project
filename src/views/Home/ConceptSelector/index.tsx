import React, { useRef, useState } from "react";
import FadeInWhenVisible from "../../../components/FadeInWhenVisible";
import ConceptNo1 from "./ConceptNo1";
import ConceptNo2 from "./ConceptNo2";

import "./index.scss";

const ConceptSelector = () => {
  const [selected, setSelected] = useState<0 | 1>(0);

  const conceptSelectorRef = useRef<HTMLDivElement>(null);

  function handleScrollClick() {
    conceptSelectorRef.current!.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="conceptselector__container" ref={conceptSelectorRef}>
      <p className="conceptselector__container--blurb">
        Below are two concepts from David Chalmers' research on consciousness.
      </p>
      <ul>
        <li
          className={selected == 0 ? "selected" : ""}
          onClick={() => setSelected(0)}
        >
          Concept 1
        </li>
        <li
          className={selected == 1 ? "selected" : ""}
          onClick={() => setSelected(1)}
        >
          Concept 2
        </li>
      </ul>
      <div className="conceptselector__container--concept__container">
        {selected == 0 ? <ConceptNo1 /> : <ConceptNo2 />}
        <div
          className="conceptselector__container--concept__container--uparrow"
          onClick={() => handleScrollClick()}
        >
          <p>
            <i className="fa-solid fa-arrow-up"></i>
            Look at Another Concept
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConceptSelector;
