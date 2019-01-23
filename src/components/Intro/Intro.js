import React from 'react';

import './Intro.scss';

const intro = props => (
  <div className="intro">



    <div className="intro-text">
        <h1 className="introheading">Pear Parfait <br /> with Bayleaf </h1>
        <p className="introlorem" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
         dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
         mollit anim id est laborum.</p>

        <p className="read-more"> <a className="readmore" href="#intro">Read More</a></p>


    </div>
    <div className="wrap"><a href="#recipe" className="downArrow"></a></div>

  </div>


);

export default intro;
