import React from 'react';
import { Chip } from 'react-mdl';
import { DiReact, DiJava, DiJavascript1, DiNodejsSmall, DiHtml5, DiMysql, DiMongodb, DiPostgresql, DiPython, DiJqueryLogo } from "react-icons/di";

import { SiWebpack, SiJest, SiNginx, SiMarketo, SiGoogleanalytics, SiAdobephotoshop } from "react-icons/si";
import { BiStats } from "react-icons/bi";
import { GrOptimize, GrDocker} from "react-icons/gr";
import { FaAws, FaSalesforce, FaJira, FaWordpress } from "react-icons/fa";


var Resume = (props) => (



  <div className="Resume-Outer" id="onload-Primary">

<a name="Resume"><h1 className="AboutMe-ThanksForStoppingBy">Resume</h1></a>

    <div className="Resume-CareerTimeline" id="JobFormatBox">
      <p className="Resume-OrgName">Work Experience</p>
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
        <p className="Resume-OrgName">Freelance Software Engineer</p>
        <p className="Resume-OrgName">Clients: Oli Gallery, Banter</p>
        <p className="Resume-Dates">2020-Present</p>
        <div className="Resume-SkillChip"><Chip><DiJavascript1 /> Javascript</Chip>   <Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiPython /> Python</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><DiMongodb /> MongoDB</Chip> <Chip><DiPostgresql /> PostgreSQL</Chip> <Chip><FaAws /> AWS</Chip> <Chip><GrDocker /> Docker</Chip></div>
      </div>
    </div>

    <div className="Resume-CareerTimeline" id="JobFormatBox">
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
        <p className="Resume-OrgName">Senior Product Marketing Manager</p>
        <p className="Resume-OrgName">BrightTALK (Acquired by TechTarget)</p>
        <p className="Resume-Dates">2017-2020</p>
        <div className="Resume-SkillChip"><Chip><DiJavascript1 /> Javascript</Chip>   <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><SiGoogleanalytics /> Google Analytics</Chip> <Chip><SiMarketo /> Marketo</Chip> <Chip><FaSalesforce /> Salesforce</Chip> <Chip><FaJira /> Jira</Chip> <Chip><FaWordpress /> WordPress</Chip> <Chip><SiAdobephotoshop /> Photoshop</Chip></div>
      </div>
    </div>

    <div className="Resume-CareerTimeline" id="JobFormatBox">
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
        <p className="Resume-OrgName">Senior Marketing Operations Specialist</p>
        <p className="Resume-OrgName">BrightTALK (Acquired by TechTarget)</p>
        <p className="Resume-Dates">2014-2017</p>
        <div className="Resume-SkillChip"><Chip><DiJavascript1 /> Javascript</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><SiGoogleanalytics /> Google Analytics</Chip> <Chip><SiMarketo /> Marketo</Chip> <Chip><FaSalesforce /> Salesforce</Chip> <Chip><FaJira /> Jira</Chip> <Chip><FaWordpress /> WordPress</Chip> <Chip><DiPython /> Python</Chip></div>
      </div>
    </div>

    <div className="Resume-CareerTimeline" id="JobFormatBox">
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
        <p className="Resume-OrgName">Marketing Specialist</p>
        <p className="Resume-OrgName">RightScale (Acquired by Flexera)</p>
        <p className="Resume-Dates">2012-2014</p>
        <div className="Resume-SkillChip"><Chip><DiJavascript1 /> Javascript</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><SiGoogleanalytics /> Google Analytics</Chip> <Chip><SiMarketo /> Marketo</Chip> <Chip><FaSalesforce /> Salesforce</Chip></div>
      </div>
    </div>

    <div className="Resume-Education">
      <p className="Resume-OrgName">Education</p>
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
        <p className="Resume-OrgName">Hack Reactor</p>
        <p className="Resume-OrgName">Full Stack Software Engineering Immersive</p>
        <p className="Resume-Dates">2020</p>
        <div className="Resume-SkillChip"><Chip><DiJavascript1 /> Javascript</Chip>   <Chip><DiNodejsSmall /> Node.js</Chip> <Chip><DiReact /> React.js</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiNodejsSmall /> Express</Chip> <Chip><DiMysql /> MySQL</Chip> <Chip><DiMongodb /> MongoDB</Chip> <Chip><DiPostgresql /> PostgreSQL</Chip> <Chip><SiJest /> Jest</Chip> <Chip><DiReact /> Enzyme</Chip>  <Chip><DiJqueryLogo /> jQuery</Chip> <Chip><SiWebpack /> Webpack</Chip> <Chip><FaAws /> AWS</Chip> <Chip><GrDocker /> Docker</Chip> <Chip><SiNginx /> NGINX</Chip></div>
      </div>
    </div>

    <div className="Resume-Education">
      <div className="Resume-Trail" />
      <div className="Resume-Icon" />
      <div className="Resume-OrgDiv">
      <p className="Resume-OrgName">University of California, Santa Cruz</p>
        <p className="Resume-OrgName">Bachelors in Business Management Economics<br></br>Minor in Technology &#38; Information Management</p>
        <p className="Resume-Dates">2008-2013</p>
        <div className="Resume-SkillChip"><Chip><DiJava /> Java</Chip> <Chip><DiPython /> Python</Chip> <Chip><BiStats /> R</Chip>  <Chip><GrOptimize /> LINGO</Chip> <Chip><DiHtml5 /> HTML/CSS</Chip> <Chip><DiMysql /> MySQL</Chip></div>
      </div>
    </div>





  </div>



)

export default Resume;