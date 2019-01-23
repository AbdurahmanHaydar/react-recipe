import React from 'react';
import TopLeft from '../img/topLeft.png';
import CenterLeft from '../img/centerLeft.png';
import BottomLeft from '../img/bottomLeft.png';
import TopRight from '../img/topRight.png';
import BottomRight from '../img/bottomRight.png';
import './Gallery.scss';

const gallery = props => (
  <div id="gallery">




    <div className="clearfix"> </div>
    <h2 className="galtext">Gallery</h2>

    <div className="responsive">
      <div  >
          <img src={TopLeft}  className="imgGal"/>
      </div>

      <div >
          <img src={CenterLeft} className="imgGal"/>
      </div>

       <div>
          <img src={BottomLeft} className="imgGal"/>
      </div>
    </div>

    <div className="responsiveRight">
      <div  >
          <br/>
         <img src={TopRight} className="imgtopright imgGal"/>
      </div>

      <div >
          <img src={BottomRight} className="imgGal"/>
      </div>
    </div>
    <div className="clearfix"> </div>
</div>

);

export default gallery;
