import Skill from "./skill";
import "./skills.css";

import UI_UX_Development from "../../images/skills/ui_ux_development.svg"
import Pencil from "../../images/skills/pencil.svg"
import API from "../../images/skills/api.svg"
import UI_UX_Design from "../../images/skills/ui_ux.svg"
import HardSkills from "../../images/skills/hardSkills.svg"
import SoftSkills from "../../images/skills/softSkills.svg"

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
        <div style={{ display: "flex" }}>
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
              logo={API}
            />
          </div>
          <div>
            <Skill
              title="UI/UX Development"
              description="implementation of the designs to create real interactive platforms for users"
              logo={UI_UX_Development}
            />
            <Skill
              title="Secondary Hard Skills"
              description="Cloud | Computer repair & maintenance"
              logo={HardSkills}
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
