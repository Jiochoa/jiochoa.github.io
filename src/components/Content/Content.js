import React from 'react';
import Tilt from 'react-tilt';
import myimage from '../../components/Image/image_me.jpg';
import './Content.css';

const Content = () => {
  return (
    <div id='content' className='tl'>
      <h1 class="title" className='tc'>About</h1>

      {/* Interests */}
      <div id="outline-container-orgheadline1" class="outline-2"><h2 id="interests">
        <a id="orgheadline1"></a>
        <span class="section-number-2">1</span> Interests</h2>
        <div class="outline-text-2" id="text-interests">
          <p>
            I'm a trained software engineer (SE) therefore most of my interests reside in that area. What specially interest me about Software Engineering is the security aspect, as it is extremely easy to disregard this part of most software specially when clients tend to ignore the implications of having a vulnerable system. Although, its not mainly their fault since the clients tend to be non-technical people who are more interested in a working product than a secure one.
          </p>
          <p>
            Another big interest of mine is in Artificial Intelligence (AI). Many knowledgeable people. such as Elon Musk and Stephen Hawking, have shown concern about Artificial Intelligence and I can see why. To put it in simple terms, there are some AI’s that are indistinguishable from a human mind and they keep improving. Some AI’s us game theory to achieve their goals and, depending on the AI, these goals could be malicious.
          </p>
          <p>
            As for non-technical interests, I also play guitar and piano on my free time. After a good day of coding I haven't been able to find a more soothing exercise than to get lost on my music and just play.
          </p>
        </div>
      </div>

      {/* Education and Training */}
      <div id="outline-container-orgheadline2" class="outline-2"><h2 id="education-and-training">
        <a id="orgheadline2"></a>
        <span class="section-number-2">2</span> Education and Training
      </h2>
        <div class="outline-text-2" id="text-education-and-training">
          <p>
            Graduated from the University of Texas at El Paso (UTEP) on Dec 2018 with my Master’s degree in Software Engineering with Concentration in Cyber-Secure Systems under the guidance of Dr. Salamah Salamah in 2018. As well as with my Bachelor’s Degree on Computer Science with a Minor in Mathematics on 2016.
          </p>
          <p>
            Some of my training include an internship on the Cyber-Security team on City Of El Paso IT Department under the guidance or Ernesto Arriola.
          </p>
        </div>
      </div>

      {/* Personal Projects */}
      <div id="outline-container-orgheadline11" class="outline-2"><h2 id="personal-projects">
        <a id="orgheadline11"></a>
        <span class="section-number-2">3</span> Personal Projects
      </h2>
        <div class="outline-text-2" id="text-personal-projects"></div>

        {/* Face Recog Project */}
        <div id="outline-container-orgheadline4" class="outline-3"><h3 id="face-recognition-project"><a id="orgheadline4"></a>
          <span class="section-number-3">3.1</span> Face Recognition Project</h3>
          <div class="outline-text-3" id="text-face-recognition-project">
            <p>
              face recognition project info...
            </p>
          </div>
        </div>

        {/* Natural Selection Project */}
        <div id="outline-container-orgheadline5" class="outline-3"><h3 id="natural-selection-project">
          <a id="orgheadline5"></a>
          <span class="section-number-3">4.2</span> Natural Selection Project</h3>
          <div class="outline-text-3" id="text-natural-selection-project">
            <p>
              I’m working on a mobile app dedicated to teach Darwinian Natural Selection in a fun way. The app will have you operating Nature as the main character and its objective is to eliminate the organisms that will keep popping up on the field.
            </p>
            <p>
              The idea is to show the player how hard it is to eradicate living organisms when they evolve and adjust to the environment.
            </p>
            <p>
              The game is still in the planning phase. Will post updates as they come. If you want to subscribe to updates you can subscribe to the mail list to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div id="outline-container-orgheadline12" class="outline-2"><h2 id="contact-info">
        <a id="orgheadline12"></a>
        <span class="section-number-2">4</span> Contact Info</h2>
        <div class="outline-text-2" id="contact-info">
          <p>
            Any questions you can reach me at my email: jiochoa@miners.utep.edu
          </p>
          <Tilt className="Tilt br2 center" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner">
              <img id='image_me' src={myimage} alt='Juan Ochoa' />
            </div>
          </Tilt>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/juan-ochoa-55a15b112">link</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/jiochoa">link</a>
          </p>
        </div>
      </div>

    </div>
  );
}
export default Content;