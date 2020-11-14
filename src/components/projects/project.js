function Project({ activeProject }) {
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
          <div style={{display:'flex'}}>
            <span className="projectDetails-text projectDetails-subTitle">
              {activeProject.subTitle}
            </span>
            <span className="projectsDetails-text projectStatus" style={{display:'flex'}}>
              <div className="projectStatus-helper">Status:</div>&nbsp;&nbsp;
              <img
                src={activeProject.subTitleImage}
                alt="project status"
                width="68"
                height="18"
              />
            </span>
          </div>
          <br />
          <span>
            {activeProject.tags.map((tag) => (
              <span className="projectDetails-text projectDetails-Tags" key={tag}>
                {tag}
              </span>
            ))}
          </span>
          <div className="projectDetails-source">
            {activeProject.accessLink.status && (
              <a
                href={activeProject.accessLink.url}
                className="projectDetails-text projectDetails-link"
                target="_blank"
                rel="nofollow noreferrer"
              >
                {activeProject.accessLink.name}
              </a>
            )}
            {activeProject.sourceCode.status && (
              <a
                href={activeProject.sourceCode.url}
                className="projectDetails-text projectDetails-link"
                target="_blank"
                rel="nofollow noreferrer"
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
