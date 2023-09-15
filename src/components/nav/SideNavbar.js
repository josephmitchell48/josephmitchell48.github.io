/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";

import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" 
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      > Home </a>
      <a href="#about_wrapper" 
        onClick={() => setActiveNav('#about_wrapper')}
        className={activeNav === '#about_wrapper' ? 'active' : ''}
      >About </a>
      <a href="#works_wrapper"
        onClick={() => setActiveNav('#works_wrapper')}
        className={activeNav === '#works_wrapper' ? 'active' : ''}
      > Work </a>
      <a href="#projects_wrapper"
        onClick={() => setActiveNav('#projects_wrapper')}
        className={activeNav === '#projects_wrapper' ? 'active' : ''}
      > Projects </a>
    </nav>
  );
};