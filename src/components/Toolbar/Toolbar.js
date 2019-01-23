import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';
import icon from './icon.png';

const toolbar = props => (
    <header className="toolbar">
      <nav className="toolbar__navigation">
          <div className="toolbar__logo"><img className="img__logo" src={icon} alt="logo" /> <a className="toolbarcolor">hellofood  <sup>&#174;</sup></a></div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
              <ul>
                  <li><a href="#intro">Intro</a> </li>
                  <li><a href="#recipe">Recipe</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </div>
          <div className="toolbar__toggle-button">
              <DrawerToggleButton click={props.drawerClickHandler} />
          </div>
      </nav>

    </header>
);

export default toolbar;
