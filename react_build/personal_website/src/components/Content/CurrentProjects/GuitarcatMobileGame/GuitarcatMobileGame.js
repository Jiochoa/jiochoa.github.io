import React from 'react';
import '../CurrentProjects.css';
import gameImage1 from '../../Media/Screenshot_1.jpg';
import gameImage2 from '../../Media/Screenshot_2.jpg';
import gameImage3 from '../../Media/Screenshot_3.jpg';

const style1 = {
  display: 'block'
}
const style2 = {
  opacity: '1',
  width: '6720px', 
  transform: 'translate3d(-3840px, 0px, 0px)'
}

const style3 = {
  width: '960px'
}




const GuitarcatMobileGame = () => {
  return (
    <div id="outline-container-orgheadline42" class="outline-3">
      <h3 id="guitarcat-mobile-game">
        <a id="orgheadline2"></a>
        <span class="section-number-3">4.2</span>
        {' GuitarCat Mobile Game'}
      </h3>
      <div class="outline-text-3" id="text-guitarcat-mobile-game">
        <p>
          This is a fun Mobile game I’ve been working on about a cat that shoots musical notes to destroy aliens. It entails most of my interests including pets, which I have way too many according to some, music and cosmic mysteries.
        </p>
        <p>
          The game was developed with <code>C#</code> on <code>Unity3D</code> using pixel art.
        </p>
        <p>
          <img id="Screenshot_1" src={gameImage3} alt="GuitarCat"/>
        </p>

        <p>
          Available soon on Google Play
        </p>
      </div>
    </div> 
  );
}

export default GuitarcatMobileGame;