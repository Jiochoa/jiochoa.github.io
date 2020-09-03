import React from 'react';
import Tilt from 'react-tilt';
// import myimage from './Images/image_me.jpg';
import myimage from '../Media/headshot.jpg';
import './ContactInfo.css';


const ContactInfo = () => {
  return (
    <div id="outline-container-orgheadline6" class="outline-2">
      <h2 id="contact-info">
        <a id="orgheadline6"></a>
        <span class="section-number-2">6</span>
        {' Contact Info'}
      </h2>
      <div class="outline-text-2" id="text-Contact-info">
        <p>
          Any questions you can reach me at my email: jiochoa@miners.utep.edu
        </p>

        {/* Headshot */ }
        <Tilt className="Tilt br2 center" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
          <div className="Tilt-inner">
            <img id='image_me' src={myimage} alt='Juan Ochoa' />
          </div>
        </Tilt>

        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/juan-ochoa-55a15b112">linkedin.com/in/juan-ochoa-55a15b112</a>
        </p>

        <p>
          GitHub: <a href="https://github.com/jiochoa">github.com/jiochoa</a>
        </p>

      </div>
    </div>
  );
}

export default ContactInfo;