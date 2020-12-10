import React from 'react';
import { Chip } from 'react-mdl';
import { DiReact, DiJavascript1, DiNodejsSmall, DiHtml5, DiMysql, DiMongodb, DiPostgresql } from "react-icons/di";

var Resume = (props) => (



<div style={{height: '20em', position: 'relative'}} className="AboutMe-intro" id="onload-Primary">

<h1 className="AboutMe-ThanksForStoppingBy">Resume</h1>
<div className="Resume-CareerTimeline">

<p className="Resume-OrgName">Work Experience</p>


  <div className="Resume-Trail"/>
  <div className="Resume-Icon"/>
  <div className="Resume-OrgDiv">
  <p className="Resume-OrgName">Contract Software Engineer</p>
  <p className="Resume-OrgName">Clients: Oli Gallery, Banter</p>
  <div className="Resume-SkillChip"><Chip><DiJavascript1/> Javascript</Chip>   <Chip><DiNodejsSmall/> Node.js</Chip> <Chip><DiReact/> React.js</Chip> <Chip><DiHtml5/> HTML/CSS</Chip> <Chip><DiNodejsSmall/> Express</Chip> <Chip><DiMysql/> MySQL</Chip> <Chip><DiMongodb/> MongoDB</Chip> <Chip><DiPostgresql/> PostgreSQL</Chip></div>
  </div>
</div>
</div>



)

export default Resume;