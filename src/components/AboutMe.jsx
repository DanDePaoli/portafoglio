import React from 'react';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

var AboutMe = (props) => (



  <div style={{ height: '54em', position: 'relative', marginBottom: '3em' }}>

  <div className="AboutMe-Quote"  id="onload-Headshot">
  <h1 className="AboutMe-Quote"><em>"The noblest pleasure is the joy of understanding"</em><br></br>-Leonardo Da Vinci</h1>
  </div>

    <img id="onload-Headshot" src="https://media-exp1.licdn.com/dms/image/C5603AQEkqVhPlaXRVw/profile-displayphoto-shrink_400_400/0/1520289381220?e=1613001600&v=beta&t=9qDfLnEpZg-yK8Pw0Y2qKVeTrUCo9qmI0J7PeTfEBEI" alt="Portrait Pic" className='Portrait-pic' />

    <div className="Banner-bar" id="onload-AboutMe">
      <h1 className="Banner-text">Daniel DePaoli <br></br>Full-Stack Software Engineer</h1>
      <div className="IconBar"><a href="https://www.linkedin.com/in/danieldepaoli/" target="_blank"><FaLinkedin className="Icons" /></a> | <a href="https://github.com/DanDePaoli" target="_blank"><FaGithub className="Icons" /></a> | <a href="#Contact"><AiOutlineMail className="Icons" /></a></div>
    </div>
    <div className="AboutMe-intro" id="onload-Primary">
      <a name="Hello"></a>
      <p className='AboutMe-intro-text'>Dear reader, thanks for stopping by.  This is a simple site I've thrown together to showcase my recent work, I hope you enjoy it.  While I am no Leonardo, I do believe in the importance of being a multi-dimensional professional and human.  It is this same hunger for knowledge that has led me to leave behind a successful former career in marketing and product at tech startups to pursue my passion for engineering.</p>
    </div>

  </div>


)

export default AboutMe;