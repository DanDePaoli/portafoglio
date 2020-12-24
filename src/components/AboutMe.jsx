import React from 'react';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

var AboutMe = (props) => (



  <div style={{ height: '54em', position: 'relative', marginBottom: '3em' }}>
    <img id="onload-Headshot" src="https://media-exp1.licdn.com/dms/image/C5603AQEkqVhPlaXRVw/profile-displayphoto-shrink_400_400/0/1520289381220?e=1613001600&v=beta&t=9qDfLnEpZg-yK8Pw0Y2qKVeTrUCo9qmI0J7PeTfEBEI" alt="Portrait Pic" className='Portrait-pic' />

    <div className="Banner-bar" id="onload-AboutMe">
      <h1 className="Banner-text">Daniel DePaoli <br></br>Full-Stack Software Engineer</h1>
      <div className="IconBar"><a href="https://www.linkedin.com/in/danieldepaoli/" target="_blank"><FaLinkedin className="Icons" /></a> | <a href="https://github.com/DanDePaoli" target="_blank"><FaGithub className="Icons" /></a> | <a href="#Contact"><AiOutlineMail className="Icons" /></a></div>
    </div>
    <div className="AboutMe-intro" id="onload-Primary">
      <a name="Hello"></a>
      <h1 className="AboutMe-ThanksForStoppingBy"><em>"The noblest pleasure is the joy of understanding"</em>  -Leonardo Da Vinci</h1>

      <p>Dear reader, thanks for stopping by.  If you're here I can only assume you've come to see my portfolio.  I’m a passionate engineer and devout lifelong learner. I believe in challenge as the path to personal growth and business as a platform for change. After a successful 8 year stint working in marketing and product for tech startups I transitioned to software engineering.  While I am no Leonardo, I do believe in the importance of being a multi-dimensional professional as well as human being.</p>
    </div>

  </div>


)

export default AboutMe;