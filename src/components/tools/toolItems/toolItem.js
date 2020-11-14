import UIUX from "../../../images/toolsIcon/ui_ux.svg";
import Frontend from "../../../images/toolsIcon/frontend.svg";
import Backend from "../../../images/toolsIcon/backend.svg";
import Others from "../../../images/toolsIcon/others.svg";

function ToolItems({ onClickTool, activeItemCSS }) {
  return (
    <div>
      {/* item 1 - UI/Ux */}
      <div
        className={`toolItem1 ${
          activeItemCSS === "UI/UX" && "inactiveItem"
        }`}
        onClick={() =>
          onClickTool([
            "Figma",
            "Adobe Illustrator",
            "Photoshop",
            "Sketch",
            "Inkscape",
          ], 'UI/UX')
        }
      >
        <img src={UIUX} alt="ux-ux tools" height="116" width="116" />
        <center>
          <p className="toolItem-text">UI/UX</p>
        </center>
      </div>

      {/* item 2 - Frontend */}
      <div
        className={`toolItem2 ${
          activeItemCSS === "Frontend" && "inactiveItem"
        }`}
        onClick={() =>
          onClickTool([
            "HTML",
            "CSS",
            "JavaScript",
            "SASS",
            "React JS",
            "Gatsby JS",
          ], 'Frontend')
        }
      >
        <img src={Frontend} alt="ux-ux tools" height="116" width="116" />
        <center>
          <p className="toolItem-text">Frontend</p>
        </center>
      </div>

      {/* item 3 - Backend */}
      <div
        className={`toolItem3 ${activeItemCSS === "Backend" && "inactiveItem"}`}
        onClick={() =>
          onClickTool([
            "Node JS",
            "Python",
            "Django",
            "Mongo DB",
            "Postgres",
            "Redis",
          ], 'Backend')
        }
      >
        <img src={Backend} alt="ux-ux tools" height="116" width="116" />
        <center>
          <p className="toolItem-text">Backend</p>
        </center>
      </div>

      {/* item 3 - Backend */}
      <div
        className={`toolItem4 ${
          activeItemCSS === "Others" && "inactiveItem"
        }`}
        onClick={() =>
          onClickTool([
            "Git",
            "Agile",
            "Docker",
            "CI/CD",
            "TDD",
            "Google Cloud Basic DevOps",
            "Pencil Drawing",
          ], 'Others')
        }
      >
        <img src={Others} alt="ux-ux tools" height="116" width="116" />
        <center>
          <p className="toolItem-text">Others</p>
        </center>
      </div>
    </div>
  );
}

export default ToolItems;
