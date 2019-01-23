import React, { Component } from 'react';
import './Contact.scss';

const contact = props => (

      <div id="contact">
        <div className="contactPage">

          <form className="contactForm">
            <h2 className="galtext">Contact</h2>
            <input type="text" placeholder="Name " className="cformField" required />
            <input type="email" placeholder="Email" className="cformField" required />
            <input type="number" placeholder="Mobile number" className="cformField" />
            <textarea type="text" placeholder="Message" className="cformField"  rows="5" cols="110" required/>
            <button className="sendButton">Send</button>
          </form>
        </div>

      </div>
);

export default contact;
