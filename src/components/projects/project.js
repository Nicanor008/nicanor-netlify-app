function Project({ activeProject }) {
  //   console.log(">>>>>>>>>>>>>>>......", activeProject.subTitleImage);
  return (
    <div className="projectDetails">
      <center>
        <img
          src={activeProject.coverImage}
          alt="project"
          className="projectImage"
          height="406"
          width="720"
        />
      </center>
      <div className="projectDetails-description">
        <div>
          <p className="projectsDetails-text projectDetails-title">
            {activeProject.title}
          </p>
          <div>
            <span className="projectDetails-text projectDetails-subTitle">
              {activeProject.subTitle}
            </span>
            <span className="projectsDetails-text projectStatus">
              Status:{" "}
              <img
                src={activeProject.subTitleImage.InProduction}
                alt="project status"
                width="68"
                height="18"
              />
            </span>
          </div>
          <br />
          <span className="projectDetails-text projectDetails-Tags">
            {activeProject.tags}
          </span>
          <div className="projectDetails-source">
            {activeProject.accessLink.status && (
              <a
                href={activeProject.accessLink.url}
                className="projectDetails-text projectDetails-link"
              >
                {activeProject.accessLink.name}
              </a>
            )}
            {activeProject.sourceCode.status && (
              <a
                href={activeProject.sourceCode.url}
                className="projectDetails-text projectDetails-link"
              >
                {activeProject.sourceCode.name}
              </a>
            )}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: activeProject.description }}
            className="projectDetails-description-text"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
