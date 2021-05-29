import React from 'react';
import YtTemplate from './YtTemplate'
import './Home.css';

export default function Home() {
  return(
    <div>
    <header> Plextech Full-Stack Curriculum Course Schedule 
    <div class="grid-container">
      <div class="grid-label">Lecture</div>
      <div class="grid-label">Topic</div>
      <div class="grid-label">Video</div>
      <div class="grid-item">1</div>
      <div class="grid-item">HTML</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'UB1O30fR-EE'/></div>
      </div>

      <div class="grid-item">2</div>
      <div class="grid-item">CSS</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'yfoY53QXEnI'/></div>
      </div>

      <div class="grid-item">3</div>
      <div class="grid-item">JavaScript</div> 
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'hdI2bqOjy3c'/></div>
      </div>
      
      <div class="grid-item">5</div>
      <div class="grid-item">React</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'w7ejDZ8SWv8'/></div>
      </div>

      <div class="grid-item">6</div>
      <div class="grid-item">NodeJS</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'TlB_eWDSMt4'/></div></div>

      <div class="grid-item">7</div>
      <div class="grid-item">Firebase</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = '9kRgVxULbag'/></div>
      </div>

      <div class="grid-item">8</div>
      <div class="grid-item-two-lines">Google Cloud Platform</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'vACTtmLWiQY'/></div>
      </div>

      <div class="grid-item">9</div>
      <div class="grid-item">Django</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'e1IyzVyrLSU'/></div>
      </div>

      <div class="grid-item">10</div>
      <div class="grid-item-two-lines">Flask + Deployment</div>
      <div class="grid-video">
        <button class="accordion">Show Video</button>
        <div class="panel">
        <YtTemplate vidId = 'YFBRVJPhDGY'/></div>
      </div>
  </div>
  </header> 
  </div>
  
  );
}

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }