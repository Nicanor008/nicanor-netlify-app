import Greetings from "../greeting/greeting";
import "./homepage.css";
import NickieJump from "../../images/Nickie.svg";
import SocialButtons from "../social/social";
import Skills from "../skills/skills";
import Tools from "../tools/tools";
import Projects from "../projects/projects";

function Homepage() {
  return (
    <div className="homepageWrapper">
      <div className="greetingsHomeWrapper">
        <Greetings />
        <img src={NickieJump} alt="Nicanor Jumping" className="NickieJumping" />
        <SocialButtons />
      </div>

      {/* skills */}
      <div>
        <Skills />
      </div>

      {/* tools */}
      <Tools />

      {/* projects */}
      <Projects />
    </div>
  );
}

export default Homepage;
