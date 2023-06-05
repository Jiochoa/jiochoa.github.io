import React from 'react';
import '../CurrentProjects.css';
import gameImage1 from '../../Media/Screenshot_1.jpg';
import gameImage2 from '../../Media/Screenshot_2.jpg';
import gameImage3 from '../../Media/Screenshot_3.jpg';
import gameImage4 from '../../Media/CC_Level_1_Demo.gif'

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
        <span class="section-number-3">3.2</span>
        {' CyberCat Mobile Game'}
      </h3>
      <div class="outline-text-3" id="text-guitarcat-mobile-game">
        <p>
          This is a puzzle game for mobile devices that I’ve been working on about a cat 
          that's looking for it's friend while going through a futuristic city. It 
          entails most of my interests which includes music, pets, which I have way too many 
          according to some, and the future.
        </p>
        <p>
          The game is being developed on <code>Unity3D</code> with <code>C#</code> on 
          using pixel art. Which I'm also making in <code>Aseprite</code>
        </p>
        <p>
          {/* <img id="Screenshot_1" src={gameImage3} alt="GuitarCat"/> */}
          <img id="Gameplay 1" src={gameImage4} alt="CyberCat"  />
        </p>

        <p>
          Available soon on Google Play
        </p>
      </div>
    </div> 
  );
}

export default GuitarcatMobileGame;