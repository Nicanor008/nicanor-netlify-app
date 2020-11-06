import Greetings from "../greeting/greeting";
import "./homepage.css";
import NickieJump from "../../images/Nickie.svg";
import SocialButtons from "../social/social";

function Homepage() {
  return (
    <div className="homepageWrapper">
      <div className="greetingsHomeWrapper">
        <Greetings />
        <img src={NickieJump} alt="Nicanor Jumping" className="NickieJumping" />
        <SocialButtons />
      </div>
    </div>
  );
}

export default Homepage;
