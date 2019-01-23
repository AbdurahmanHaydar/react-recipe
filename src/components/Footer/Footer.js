import React from 'react';

import './Footer.scss';
import iconFooter from './footer.png';

const footer= props => (
    <div className="footer">
        <div className="footbar__navigation">
          <div className="footer_navigation-items">
              <img className="img__logoFooter" src={iconFooter}  />
          </div>
          <div className="spacer" />
          <br />
            <div className="footer_navigation-items">
              <ul>
                  <li>+27 21 555 5555   </li>
              </ul>
          </div>

          <div className="footer_navigation-items">
            <ul>
                <li>info@hellocomputer.com   </li>
            </ul>
        </div>
        <br />
        <div className="footer_navigation-items">
          <ul>
              <li className="fa fa-facebook"></li>
              <li className="fa fa-twitter"></li>
              <li className="fa fa-instagram"></li>
          </ul>
      </div>

      </div>

    </div>

);

export default footer;
