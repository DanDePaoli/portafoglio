import React from 'react';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

var AboutMe = (props) => (



  <div style={{ height: '66em', minWidth: '90em', position: 'relative', marginBottom: '3em' }}>

    <div className="AboutMe-Quote" id="onload-Headshot">
      <h1 className="AboutMe-Quote"><em>"The noblest pleasure is the joy of understanding"</em><br></br>-Leonardo Da Vinci</h1>
    </div>

    <img id="onload-Headshot" src="https://ddpgithubprojects.s3-us-west-2.amazonaws.com/PatagoniaPortrait.jpg" alt="Portrait Pic" className='Portrait-pic' />

    <div className='BannerBar-Inner2' id="onload-AboutMe">
      <img src="https://ddpgithubprojects.s3-us-west-2.amazonaws.com/Buddha.JPEG" className='BannerBar-IMG2' />

      <h1 className="BannerBar-Header2">Daniel DePaoli <br></br>Full-Stack Software Engineer

      <div className="IconBar"><a href="https://www.linkedin.com/in/danieldepaoli/" target="_blank"><FaLinkedin className="Icons" /></a> | <a href="https://github.com/DanDePaoli" target="_blank"><FaGithub className="Icons" /></a> | <a href="#Contact"><AiOutlineMail className="Icons" /></a></div>

      </h1>
    </div>

    <div className="AboutMe-intro" id="onload-Primary">
      <a name="Hello"></a>
      <p className='AboutMe-intro-text'>Dear reader, thanks for stopping by.  This is a simple site I've thrown together to showcase my recent coding projects and freelance work.  All photos are my own.  While I am no Leonardo, I do believe in the importance of being a multi-dimensional professional and human being.  It is this joy of challenge and lifelong learning that has led me to leave behind my career in marketing to pursue my passion for engineering.</p>
    </div>

  </div>


)

export default AboutMe;