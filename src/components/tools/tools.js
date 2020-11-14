import React, { useState } from "react";
import loadable from "@loadable/component";

import HandPointer from "../../images/HandPointer.jpg";

import "./tools.css";
import "./toolItem.css";

const ToolItems = loadable(() => import("./toolItems/toolItem"));

function Tools() {
  const [activeTool, setActiveTool] = useState();
  const [activeItemCSS, setActiveItemCSS] = useState("");
  const [noTool, setNoTool] = useState(false);

  const onClickTool = (item, name) => {
    setActiveTool(item);
    setNoTool(true);
    setActiveItemCSS(name)
  };

  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/nicanor/image/upload/v1605286542/Nic-Image.webp"
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
            {noTool ? (
              <span className="toolsTitle toolsActive-text toolsItem-text">
                {activeTool.map((tool) => (
                  <div key={tool} className="toolsActive-tool">
                    {tool}
                  </div>
                ))}
              </span>
            ) : (
              <>
                <br />
                <span className="toolsTitle toolsHandPointer-text toolsItem-text">
                  Click any tool & the magic will appear
                  <img
                    src={HandPointer}
                    alt="hand pointer"
                    className="toolsHandPointer-image"
                  />
                </span>
              </>
            )}
          </center>
        </div>
        <ToolItems onClickTool={onClickTool} activeItemCSS={activeItemCSS} />
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
