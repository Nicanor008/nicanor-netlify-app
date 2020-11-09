import NicImage from "../../images/Nic-Image.svg";
import RoadmapArrow from "../../images/RoadmapArrow.svg";
import HandPointer from "../../images/HandPointer.jpg";

import "./tools.css";
import "./toolItem.css";
import ToolItems from "./toolItems/toolItem";

function Tools() {
  return (
    <div>
      <div>
        <img src={NicImage} alt="Nicanor" className="toolsImageNicanor" />
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
          src={RoadmapArrow}
          alt="Nicanor Tools roadmap"
          className="toolsImageRoadmapArrow"
        />
      </div>
    </div>
  );
}

export default Tools;
