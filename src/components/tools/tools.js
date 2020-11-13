import loadable from "@loadable/component";

import HandPointer from "../../images/HandPointer.jpg";

import "./tools.css";
import "./toolItem.css";

const ToolItems = loadable(() => import("./toolItems/toolItem"));

function Tools() {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/nicanor/image/upload/v1605273279/Nic-Image.svg"
          alt="Nicanor"
          className="toolsImageNicanor"
          height="512"
          width="426"
        />
      </div>
      <div>
        <div>
          <p className="toolsTitle toolsTitle1">TOOLS</p>
          <p className="toolsTitle toolsTitle2">Design & Development Tools</p>
        </div>
        <div className="toolsHandPointerWrapper">
          <center>
            <br />
            <span className="toolsTitle toolsHandPointer-text">
              Hover/Click ME
              <img
                src={HandPointer}
                alt="hand pointer"
                className="toolsHandPointer-image"
              />
            </span>
          </center>
        </div>
        <ToolItems />
        <img
          src="https://res.cloudinary.com/nicanor/image/upload/v1605273479/RoadmapArrow.svg"
          alt="Nicanor Tools roadmap"
          className="toolsImageRoadmapArrow"
          height="814"
          width="406"
        />
      </div>
    </div>
  );
}

export default Tools;
