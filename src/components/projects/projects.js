import React, { useState, useEffect } from "react";
import loadable from "@loadable/component";

import "./projects.css";
import ArrowLeft from "../../images/projects/ArrowLeft.svg";
import ArrowRight from "../../images/projects/ArrowRight.svg";
import { ProjectsData } from "./projectsData";

const Project = loadable(() => import("./project"));

function Projects() {
  const [activeProject, setActiveProject] = useState("");
  const [activeProjectNumber, setActiveProjectNumber] = useState(0);
  const [nextButtonInactive, setNextButtonInactive] = useState(true);

  useEffect(() => {
    setActiveProject(ProjectsData[0]);
    setActiveProjectNumber(0);
  }, []);

  const nextProject = () => {
    setActiveProject(ProjectsData[activeProjectNumber + 1]);
    setActiveProjectNumber(activeProjectNumber + 1);
    if (ProjectsData[activeProjectNumber + 2] === undefined)
      setNextButtonInactive(false);
  };

  // console.log(activeProjectNumber, ">>>>>>>>>>>><<<<<<<<<<<<<<<<<<<fff>>>......", activeProject);

  return (
    <div>
      {/* set background colors/animations */}
      <img
        src="https://res.cloudinary.com/nicanor/image/upload/v1605272317/ProjectsBg1.svg"
        alt="background animation"
        className="projectsBg projectsBg1"
        height="801"
        width="400"
      />
      <img
        src="https://res.cloudinary.com/nicanor/image/upload/v1605272326/ProjectsBg2.svg"
        alt="background animation"
        className="projectsBg projectsBg2"
        width="546"
        height="733"
      />

      {/* project wrapper */}
      <div className="projectsBg projectsWrapper">
        <Project activeProject={activeProject} />

        {/* footer */}
        <div className="projectsFooter">
          <img src={ArrowLeft} alt="Arrow left" height="70" width="70" />
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
          <img
            src={ArrowRight}
            alt="Arrow right"
            height="70"
            width="70"
            style={{
              opacity: !nextButtonInactive && 0.5,
              cursor: `${nextButtonInactive ? "pointer" : "default"}`,
            }}
            onClick={nextButtonInactive ? nextProject : null}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
