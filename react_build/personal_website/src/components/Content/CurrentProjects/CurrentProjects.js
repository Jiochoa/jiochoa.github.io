import React from 'react';
import FaceRecognitionProject from '../CurrentProjects/FaceRecognitionProject/FaceRecognitionProject';
import GuitarcatMobileGame from '../CurrentProjects/GuitarcatMobileGame/GuitarcatMobileGame';
import NaturalselectionMobileGame from '../CurrentProjects/NaturalselectionMobileGame/NaturalselectionMobileGame';

const CurrentProjects = () => {
  return (
    <div id="outline-container-orgheadline4" class="outline-2">
      <h2 id="current-projects">
        <a id="orgheadline4"></a>
        <span class="section-number-2">3</span>
        {' Current Projects'}
      </h2>
      <div class="outline-text-2" id="text-current-projects">
        <p>
          This section includes some of the projects I've been working on as well as some past projects.        
        </p>
      </div>
      {/* Projects */}
      <FaceRecognitionProject />
      <GuitarcatMobileGame />
      <NaturalselectionMobileGame />
        
    </div>
  );
}

export default CurrentProjects;