import React from 'react';
import './TableOfContents.css';

const TableOfContents = () => {
  return (
    <div id="table-of-contents">
      <h2>
        Table of Contents
        <a href="#">Close</a>
      </h2>
      <div id="text-table-of-contents">
        <ul>
          {/* <li><a href="#philosophy">1. Philosophy</a></li> */}
          <li><a href="#interests">1. Intro</a></li>
          <li><a href="#education-and-training">2. Education and Training</a></li>
          <li><a href="#current-projects">3. Current Projects</a>
            <ul>
              <li><a href="#face-recognition-project">3.1. Face Recognition Project</a></li>
              <li><a href="#guitarcat-mobile-game">3.2. CyberCat Mobile Game</a></li>
              <li><a href="#naturalselection-mobile-game">3.3. ChatGPt Mobile App</a></li>
            </ul>
          </li>
          <li><a href="#tutorials">4. Tutorials</a>
            <ul>
              <li><a href="#programming-tutorials">4.1. Programming Tutorials</a></li>
              <li><a href="#other-tutorials">4.2. Other Tutorials</a></li>
            </ul>
          </li>
          <li><a href="#contact-info">5. Contact Info</a></li>
        </ul>
      </div>

    </div>
  );
}

export default TableOfContents;