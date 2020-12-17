import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Carousel from './Carousel.jsx';
import Calendar from './Calendar.jsx';
import { FaGithub } from "react-icons/fa";

var Projects = (props) => (



  <div className='Projects' id="onload-Primary">
    <div className="Projects-Transition"> <a name="Portfolio"><h1 className="AboutMe-ThanksForStoppingBy">Portfolio</h1></a> </div>

    <div className='Project-one'>
      <div className="Projects-ProjectOuter">
        <h1 className="Projects-ProjectTitle">Recommended Products Image Carousel - GreatEscapes, Full-Stack Micro-Service</h1>
        <div className="Projects-ProjectInner">
        <div className="Projects-ProjectInnerLeft">
        <ul className="Projects-Bullets">
          <li>Created high-functioning backend service with 120M+ records, fully fleshed out API routes, and a MongoDB schema</li>

          <li>Achieved 1000 rps (using loader.io) by leveraging key query optimizations and DB indexing</li>

          <li>Deployed a multi-server architecture leveraging an NGINX load balancer with AWS EC2 instances</li>
        </ul>

        </div>
        <div className="Projects-ProjectInnerRight">

        <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="https://342sv54cwf1w32bxz36tm0bv-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/github_PNG20.png" />
  <Card.Body>
    <Button variant="primary">Go To Code</Button>
  </Card.Body>
</Card>


          </div>
        </div>

        <Carousel />
      </div>

    </div>
    <div className='Project-two'>
      <div className="Projects-ProjectOuter">
        <h1 className="Projects-ProjectTitle">Reservation Calendar for Vacation Rental Site - GreatEscapes, Full-Stack Micro-Service</h1>
        <ul className="Projects-Bullets">
          <li>Developed an interactive, fully functioning microservice using JavaScript, React, and MySQL</li>

          <li>Architected a custom Express proxy server that handled routing to multiple APIs and served up static assets</li>

          <li>Optimized Google lighthouse loading speed by 53% using text compression</li>
        </ul>



      </div>
      <Calendar />

    </div>
    <div className='Project-three'></div>

  </div>


)

export default Projects;