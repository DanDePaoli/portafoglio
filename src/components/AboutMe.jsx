import React from 'react';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

var AboutMe = (props) => (



<div style={{height: '50em', position: 'relative'}}>
<img src="https://media-exp1.licdn.com/dms/image/C5603AQEkqVhPlaXRVw/profile-displayphoto-shrink_400_400/0/1520289381220?e=1613001600&v=beta&t=9qDfLnEpZg-yK8Pw0Y2qKVeTrUCo9qmI0J7PeTfEBEI" alt="Portrait Pic" className='Portrait-pic'/>

  <div className="Banner-bar">
  <h1 className = "Banner-text">Full-Stack Software Engineer</h1>
  <div className ="Icons"><FaLinkedin/> | <FaGithub/> | <AiOutlineMail/></div>
  </div>
<div className="AboutMe-intro">
  <h1 className="AboutMe-ThanksForStoppingBy">Thanks for stoping by</h1>
<p>I’m a passionate engineer and devout lifelong learner. I believe in challenge as the path to personal growth and business as a platform for change. After a successful 8 year stint working in marketing for tech startups I transitioned to software engineering. I deeply enjoy the analytical and creative challenge of building clean, scalable systems. Right now I work mostly with Javascript (Node, React, etc) and Python.</p>
</div>

</div>


)

export default AboutMe;