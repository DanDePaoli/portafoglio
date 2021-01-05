import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Carousel from './Carousel.jsx';
import Calendar from './Calendar.jsx';
import { FaGithub, FaAws } from "react-icons/fa";

import { Chip } from 'react-mdl';
import { DiReact, DiJavascript1, DiNodejsSmall, DiHtml5, DiMysql, DiMongodb, DiPostgresql } from "react-icons/di";

import { SiNginx, SiAirbnb } from "react-icons/si";
import { GrDocker } from "react-icons/gr";


var Projects = (props) => (



  <div className='Projects' id="onload-Primary">


    <div className="ClientWork-Banner" id="onload-AboutMe"> <a name="Portfolio">

      <img src="https://ddpgithubprojects.s3-us-west-2.amazonaws.com/IcelandLayercake2.jpg" className='ClientWork-Banner-IMG' />

      <h1 className="AboutMe-Contact-Header">     <div className="Contact-Header">Projects</div></h1></a> </div>





    <div className='Project-one'>
      <div className="Projects-ProjectOuter">

        <div className="Projects-ProjectInner">
          <div className="Projects-ProjectInnerLeft">

            <a name="Carousel"></a>

            <h1 className="Projects-ProjectTitle">Recommendation Carousel - <span id="GreatEscapes"><SiAirbnb />GreatEscapes</span></h1>
            <ul className="Projects-Bullets">
              <li className='Projects-Bullets'>Full-Stack recommended rentals carousel with realistic data schema, server, and API routes </li>


              <li className='Projects-Bullets'>Optimized for back-end performance and realworld scale ( 120M+ records )</li>

              <li className='Projects-Bullets'>Achieved 1000 rps (using loader.io) by leveraging key query optimizations and DB indexing</li>

              <li className='Projects-Bullets'>Deployed a multi-server architecture leveraging an NGINX load balancer with AWS EC2 instances</li>
            </ul>
            <div className="Resume-SkillChip"><Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMongodb /> MongoDB</Chip>  <Chip><FaAws /> AWS</Chip> <Chip><SiNginx /> NGINX</Chip></div>



          </div>
          <div className="Projects-ProjectInnerRight">

            <Card style={{ width: '12rem' }}>
              <Card.Img style={{ width: '9rem', margin: 'auto', paddingTop: '1em'}} variant="top" src="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/github_PNG20.png" />
              <Card.Body>
                <a href="https://github.com/DanDePaoli/ImageCarouselRebuild" target="_blank"><Button variant="primary" className="Projects-GitHub" id="GitHub-Button">Go To Code</Button></a>
              </Card.Body>
            </Card>


          </div>
        </div>

        <Carousel />
      </div>

    </div>
    <div className='Project-two'>

      <div className="Projects-ProjectOuter">


        <div className="Projects-ProjectInner">
          <div className="Projects-ProjectInnerLeft">

            <a name="Calendar"></a>

            <h1 className="Projects-ProjectTitle">Reservation Calendar - <span id="GreatEscapes"><SiAirbnb />GreatEscapes</span></h1>
            <ul className="Projects-Bullets">
              <li className='Projects-Bullets'>Full-Stack rental reservation module with realistic data schema, server, and API routes</li>

              <li className='Projects-Bullets'>Includes fully functioning interactive reservation calendar leveraging realtime date and time data using moment.js</li>

              <li className='Projects-Bullets'>Architected a custom Express proxy server that handled routing to multiple APIs and served up static assets</li>

              <li className='Projects-Bullets'>Optimized Google lighthouse loading speed by 53% using text compression</li>
            </ul>

            <div className="Resume-SkillChip"><Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><FaAws /> AWS</Chip> <Chip><GrDocker /> Docker</Chip></div>



          </div>
          <div className="Projects-ProjectInnerRight">

            <Card style={{ width: '12rem' }}>
              <Card.Img style={{ width: '9rem', margin: 'auto', paddingTop: '1em'}} variant="top" src="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/github_PNG20.png" />
              <Card.Body>
                <a href="https://github.com/DanDePaoli/CalendarRebuild/" target="_blank"><Button variant="primary" className="Projects-GitHub" id="GitHub-Button">Go To Code</Button></a>
              </Card.Body>
            </Card>


          </div>
        </div>
        <Calendar />

      </div>
    </div>

  </div>


)

export default Projects;