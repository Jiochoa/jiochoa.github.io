import React from 'react';

const FaceRecognitionProject = () => {
  return (
    <div id="outline-container-orgheadline41" class="outline-3">
      <h3 id="face-recognition-project">
        <a id="orgheadline1"></a>
        <span class="section-number-3">3.1</span>
        {' Face Recognition Project'}
      </h3>
      <div class="outline-text-3" id="text-face-recognition-project">
        <p>
          This is a website that lets you input an image and helps you identify the faces in that image using the CLARIFAI API. It also lets you create a profile to keep count of the number of images you have input in the system. 
        </p>
        <p>
          The Front End was created with <code>HTML5</code> and <code>CSS3</code> using the <code>REACT</code> web framework.
        </p>
        <p>
          The Back End was created using <code>Node.js</code> and <code>Express.js</code> for the servers and it is also connected to a <code>PostgreSQL</code> database for keeping the profiles saved.       
        </p>
        <p>
          Website: <a href="https://da-smart-brain.herokuapp.com/">https://da-smart-brain.herokuapp.com/</a>
        </p>
      </div>
    </div>
  );
}

export default FaceRecognitionProject;