import React from 'react';
import YtTemplate from './YtTemplate';
import './Home.css';
// import Accordion from 'react-bootstrap/Accordion';

export default function Home() {
  return(
    <div className="encapsulate">
    <header> Plextech Full-Stack Curriculum Course Schedule </header>
    <div className="grid-container">
      <div className="grid-label">Lecture</div>
      <div className="grid-label">Topic</div>
      <div className="grid-label">Video</div>
      <div className="grid-item">1</div>
      <div className="grid-item">HTML</div>
      <div className="grid-video">
        <YtTemplate vidId = 'UB1O30fR-EE'/></div>

      <div className="grid-item">2</div>
      <div className="grid-item">CSS</div>
      <div className="grid-video">
        <YtTemplate vidId = 'yfoY53QXEnI'/>
      </div>

      <div className="grid-item">3</div>
      <div className="grid-item">JavaScript</div> 
      <div className="grid-video">
        <YtTemplate vidId = 'hdI2bqOjy3c'/>
      </div>
      
      <div className="grid-item">5</div>
      <div className="grid-item">React</div>
      <div className="grid-video">
        <YtTemplate vidId = 'w7ejDZ8SWv8'/>
      </div>

      <div className="grid-item">6</div>
      <div className="grid-item">NodeJS</div>
      <div className="grid-video">
        <YtTemplate vidId = 'TlB_eWDSMt4'/></div>

      <div className="grid-item">7</div>
      <div className="grid-item">Firebase</div>
      <div className="grid-video">
        <YtTemplate vidId = '9kRgVxULbag'/>
      </div>

      <div className="grid-item">8</div>
      <div className="grid-item">Google Cloud Platform</div>
      <div className="grid-video">
        <YtTemplate vidId = 'vACTtmLWiQY'/>
      </div>

      <div className="grid-item">9</div>
      <div className="grid-item">Django</div>
      <div className="grid-video">
        <YtTemplate vidId = 'e1IyzVyrLSU'/>
      </div>

      <div className="grid-item">10</div>
      <div className="grid-item">Flask + Deployment</div>
      <div className="grid-video">
        <YtTemplate vidId = 'YFBRVJPhDGY'/>
      </div>
  </div>
  </div>
  );
}

    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none";
    //     } else {
    //       panel.style.display = "block";
    //     }
    //   });
    // }