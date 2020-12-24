import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ClientGallery from './ClientGallery.jsx';
import { FaGithub, FaAws } from "react-icons/fa";

import { Chip } from 'react-mdl';
import { DiReact, DiJavascript1, DiNodejsSmall, DiHtml5, DiMysql, DiMongodb, DiPostgresql } from "react-icons/di";

import { SiNginx, SiAirbnb } from "react-icons/si";
import { GrDocker } from "react-icons/gr";


var ClientWork = (props) => (



  <div className='Projects' id="onload-Primary">
    <div className="Projects-Transition"> <a name="Portfolio"><h1 className="AboutMe-ThanksForStoppingBy">Client Work</h1></a> </div>

    <div className='Project-one'>
      <div className="Projects-ProjectOuter">

        <div className="Projects-ProjectInner">
          <div className="Projects-ProjectInnerLeft">

            <a name="OliGallery"></a>

            <h1 className="Projects-ProjectTitle">Client:  <img className='ClientWork-Logo' src="https://oli-gallery.s3-us-west-2.amazonaws.com/Oli-Logo-STACKED-Brown-Gallery.png"></img></h1>
            <ul className="Projects-Bullets">
              <li className='Projects-Bullets'>Oli Gallery is a modern online art co-op where studio artists (painters, sculpters, etc) can present and sell their work to new audiences</li>
              <li className='Projects-Bullets'>Designed by artists for artists with simplicity and elegence in mind</li>
              <li className='Projects-Bullets'>I'm building it from scratch using Node, React, Express, Mysql and deployed on AWS</li>
              <li className='Projects-Bullets'>This modern full-stack web application includes features for image editing, ecommerce, and art discovery</li>

            </ul>
            <div className="Resume-SkillChip"><Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMysql /> MySQL</Chip>  <Chip><FaAws /> AWS</Chip> <Chip><SiNginx /> NGINX</Chip></div>


          </div>
          <div className="Projects-ProjectInnerRight">

            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/github_PNG20.png" />
              <Card.Body>
                <a href="#Contact"><Button variant="primary" className="Projects-GitHub">Let's Talk</Button></a>
              </Card.Body>
            </Card>


          </div>
        </div>
        <div className='ClientWork-ProjectPadding'>  <ClientGallery /> </div>

      </div>
    </div>
    <div className='Project-two'>

      <div className="Clients-Outer">


        <div className="Projects-ProjectInner">
          <div className="Projects-ProjectInnerLeft">
            <h1 className="Projects-ProjectTitle">Client: <img className='ClientWork-Logo' src="https://ddpgithubprojects.s3-us-west-2.amazonaws.com/BanterLogo.png"></img></h1>
            <ul className="Projects-Bullets">
              <li className='Projects-Bullets'>Coming Soon</li>
              <li className='Projects-Bullets'>Coming Soon</li>
              <li className='Projects-Bullets'>Coming Soon</li>
            </ul>

            <div className="Resume-SkillChip"><Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><FaAws /> AWS</Chip> <Chip><GrDocker /> Docker</Chip></div>



          </div>
          <div className="Projects-ProjectInnerRight">

            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/github_PNG20.png" />
              <Card.Body>
                <a href="#Contact"><Button variant="primary" className="Projects-GitHub">Let's Talk</Button></a>
              </Card.Body>
            </Card>


          </div>
        </div>

      </div>
    </div>
  </div>


)

export default ClientWork;