import React from 'react';

import './DrawerToggleButton.scss';

const drawerToggleButton = props => (
    <div className="menu">
      <h1 className="toggle-menu">Menu</h1>
      <button className="toggle-button" onClick={props.click}>
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
      </button>
    </div>

);

export default drawerToggleButton;
