import React from "react";

import "./index.scss";

export interface NavbarProps {
  scrollClick: Function;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { scrollClick } = props;

  return (
    <div className="navbar__container">
      <div className="navbar__container--gif">
        <iframe
          src="https://giphy.com/embed/l41YgOPSjVe47TTRm"
          width="480"
          height="360"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <h1>David Chalmers</h1>
      <h2>PHILL11 Research Project</h2>
      <h3>By Zack Traczyk</h3>
      <div
        className="navbar__container--downArrow"
        onClick={() => scrollClick()}
      >
        <i className="fa-solid fa-arrow-down"></i>
      </div>
    </div>
  );
};

export default Navbar;
