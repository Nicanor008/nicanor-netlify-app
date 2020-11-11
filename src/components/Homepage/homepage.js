import { Helmet } from "react-helmet";
import loadable from "@loadable/component";

import "./homepage.css";
import NickieJump from "../../images/Nickie.svg";
import NicImage from "../../images/Nic-Image.svg";

const Greetings = loadable(() => import("../greeting/greeting"));
const SocialButtons = loadable(() => import("../social/social"));
const Skills = loadable(() => import("../skills/skills"));
const Tools = loadable(() => import("../tools/tools"));
const Projects = loadable(() => import("../projects/projects"));
const Footer = loadable(() => import("../footer/footer"));

function Homepage() {
  return (
    <main className="homepageWrapper">
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
        <meta
          name="twitter:card"
          content="Nicanor Korir is an enthusiastic software engineer who is well versed with how the different technologies work to meet business needs."
        />
        <meta name="twitter:site" content="@nicanor_nic" />
        <meta property="og:description" content="Nicanor Korir portfolio" />
      </Helmet>
      <div className="greetingsHomeWrapper">
        <Greetings />
        <img src={NickieJump} alt="Nicanor Jumping" className="NickieJumping" height="832" width="235"/>
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
    </main>
  );
}

export default Homepage;
