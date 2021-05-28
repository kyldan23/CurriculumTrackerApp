import React from 'react';
import YtTemplate from './YtTemplate'
import './Home.css';

export default function Home() {
  return(
    <body>
    <header> Plextech Full-Stack Curriculum Course Schedule 
    <div class="grid-container">
      <div class="grid-label">Lecture</div>
      <div class="grid-label">Topic</div>
      <div class="grid-label">Video</div>
      <div class="grid-item">1</div>
      <div class="grid-item">HTML</div>
      <div class="grid-video">
        <YtTemplate vidId = 'UB1O30fR-EE'/>
      </div>

      <div class="grid-item">2</div>
      <div class="grid-item">CSS</div>
      <div class="grid-video">
        <YtTemplate vidId = 'yfoY53QXEnI'/></div>

      <div class="grid-item">3</div>
      <div class="grid-item">JavaScript</div> 
      {/* originally "Javascript 1" but we found 1 video total */}
      <div class="grid-video">
      <YtTemplate vidId = 'hdI2bqOjy3c'/>
      </div>

      {/* <div class="grid-item">4</div>
      <div class="grid-item">JavaScript 2</div>
      <div class="grid-item">
        <YtTemplate vidId = 'TlB_eWDSMt4'/>
      </div> */}
      
      <div class="grid-item">5</div>
      <div class="grid-item">React</div>
      <div class="grid-video">
        <YtTemplate vidId = 'w7ejDZ8SWv8'/>
      </div>

      <div class="grid-item">6</div>
      <div class="grid-item">NodeJS</div>
      <div class="grid-video">
        <YtTemplate vidId = 'TlB_eWDSMt4'/></div>

      <div class="grid-item">7</div>
      <div class="grid-item">Firebase</div>
      <div class="grid-video">
        <YtTemplate vidId = '9kRgVxULbag'/>
      </div>

      <div class="grid-item">8</div>
      <div class="grid-item-two-lines">Google Cloud Platform</div>
      <div class="grid-video">
        <YtTemplate vidId = 'vACTtmLWiQY'/>
      </div>

      <div class="grid-item">9</div>
      <div class="grid-item">Django</div>
      <div class="grid-video">
        <YtTemplate vidId = 'e1IyzVyrLSU'/>
      </div>

      <div class="grid-item">10</div>
      <div class="grid-item-two-lines">Flask + Deployment</div>
      <div class="grid-video">
        <YtTemplate vidId = 'YFBRVJPhDGY'/>
      </div>
  </div>
  </header> 
  </body>
  );
}