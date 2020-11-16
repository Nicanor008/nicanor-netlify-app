import Skill from "./skill";
import "./skills.css";

import UI_UX_Design from "../../images/skills/ui_ux.svg"
import Frontend from "../../images/toolsIcon/frontend.svg"
import Backend from "../../images/toolsIcon/backend.svg"
import Pencil from "../../images/toolsIcon/pencil.svg"
import Graduate from "../../images/toolsIcon/graduate.svg"
import SoftSkills from "../../images/toolsIcon/softSkills.svg"

function Skills() {
  return (
    <div className="skillsWrapper">
      <div>
        <center>
          <p className="skillsTitle1">WHAT DO I DO</p>
          <span className="skillsTitle2">TECH SKILLS</span>
        </center>
        <br />
        <br />
        <div className="skillsWrapper-skills">
          <div>
            <Skill
              title="UI/UX Design"
              description="Web & App Design, Logo, Wireframing, Prototyping, Mockups."
              logo={UI_UX_Design}
            />
            <Skill
              title="Pencil Drawing"
              description="Having drawing random stuff"
              logo={Pencil}
            />
            <Skill
              title="API & Microservices Development"
              description="Development of the application logic to meet the business values"
              logo={Backend}
            />
          </div>
          <div>
            <Skill
              title="UI/UX Development"
              description="implementation of the designs to create real interactive platforms for users"
              logo={Frontend}
            />
            <Skill
              title="Secondary Hard Skills"
              description="Cloud | Computer repair & maintenance"
              logo={Graduate}
            />
            <Skill
              title="Soft Skills"
              description="Keen listener and constructive communication with team spirit"
              logo={SoftSkills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
