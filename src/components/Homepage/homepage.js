import { Helmet } from "react-helmet";

import Greetings from "../greeting/greeting";
import "./homepage.css";
import NickieJump from "../../images/Nickie.svg";
import NicImage from "../../images/Nic-Image.svg";
import SocialButtons from "../social/social";
import Skills from "../skills/skills";
import Tools from "../tools/tools";
import Projects from "../projects/projects";
import Footer from "../footer/footer";

function Homepage() {
  return (
    <div className="homepageWrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nicanor Korir</title>
        <meta name="description" content="Nicanor Korir portfolio" />
        <meta
          name="keywords"
          content="Nicanor, Korir, Nicanor Portfolio, Nicanor Career, Nicanor Korir software engineer, Software engineer, Frontend engineer, available for React JS jobs, React, React JS, JavaScript"
        />
        <meta name="author" content="Nicanor Korir" />
        <meta property="og:title" content="Nicanor Korir" />
        <meta property="og:image" content={NicImage} />
        <meta name="twitter:card" content="Nicanor Korir is an enthusiastic software engineer who is well versed with how the different technologies work to meet business needs." />
        <meta name="twitter:site" content="@nicanor_nic" />
        <meta property="og:description" content="Nicanor Korir portfolio" />
      </Helmet>
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

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
