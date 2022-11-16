import React from "react";

import "./index.scss";

export interface NavbarProps {
  scrollClick: Function;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const { scrollClick } = props;

  return (
    <div className="navbar__container">
      <h1>PHILL11</h1>
      <h2>David Chalmers' Research</h2>
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
