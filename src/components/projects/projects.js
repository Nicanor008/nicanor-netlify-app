import ProjectBg1 from "../../images/projects/ProjectsBg1.svg";
import ProjectBg2 from "../../images/projects/ProjectsBg2.svg";
import ArrowLeft from "../../images/projects/ArrowLeft.svg";
import ArrowRight from "../../images/projects/ArrowRight.svg";
import InProduction from "../../images/projects/InProduction.svg";
import Project from "../../images/projects/project1.jpg";

import "./projects.css";

function Projects() {
  return (
    <div>
      {/* set background colors/animations */}
      <img
        src={ProjectBg1}
        alt="background animation"
        className="projectsBg projectsBg1"
      />
      <img
        src={ProjectBg2}
        alt="background animation"
        className="projectsBg projectsBg2"
      />

      {/* project wrapper */}
      <div className="projectsBg projectsWrapper">
        <div className="projectDetails">
          <img src={Project} alt="project" className="projectImage" />
          <div className="projectDetails-description">
            <div>
              <p className="projectsDetails-text, projectDetails-title">
                Cards Maker
              </p>
              <div>
                <span className="projectDetails-text projectDetails-subTitle">
                  Web App
                </span>
                <img
                  src={InProduction}
                  alt="project status"
                  className="projectStatus"
                />
              </div>
              <br />
              <span className="projectDetails-text projectDetails-Tags">
                ReactJS | NodeJS | MongoDB
              </span>
              <div className="projectDetails-source">
                <a href="/" className="projectDetails-text projectDetails-link">
                  Access Link
                </a>
                <a href="/" className="projectDetails-text projectDetails-link">
                  Source Code
                </a>
              </div>
              <p className="projectDetails-description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Imperdiet ut vulputate proin phasellus ut adipiscing quis
                laoreet. Et nibh tempus aliquet venenatis massa. Senectus urna
                volutpat sed venenatis pharetra, nisi, laoreet leo aliquam.
                Nulla commodo sit vitae tempus, cursus sed vulputate. Hendrerit
                id at neque donec consectetur penatibus cursus malesuada
                ultricies. Tellus odio lobortis urna id vulputate. Ipsum cursus
                etiam id scelerisque consequat libero, faucibus adipiscing.
                Turpis ultricies quis sed amet, quis. A enim a sit vivamus quam.
                Purus, diam arcu nullam facilisi volutpat maecenas congue at
                facilisis. Justo, risus, neque sem tempus risus praesent. Nunc
                eget pulvinar nisi facilisis. Duis iaculis nunc at at id. Nibh
                mauris nullam augue commodo. Ullamcorper fermentum non morbi
                vivamus. Aliquam id netus pulvinar felis. Venenatis rutrum massa
                leo est sed quam amet. Eleifend aliquam, tempus ullamcorper sed.
              </p>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="projectsFooter">
          <img src={ArrowLeft} alt="Arrow left" />
          <span>
            <center>
              <p className="projectsFooter-text projectsFooter-text1">
                PROJECTS
              </p>
              <p className="projectsFooter-text projectsFooter-text2">
                What I Have Created.
              </p>
            </center>
          </span>
          <img src={ArrowRight} alt="Arrow right" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
