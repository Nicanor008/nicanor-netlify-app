import UIUX from "../../../images/toolsIcon/ui_ux.svg";
import Frontend from "../../../images/toolsIcon/frontend.svg";
import Backend from "../../../images/toolsIcon/backend.svg";
import Others from "../../../images/toolsIcon/others.svg";

function ToolItems() {
  return (
    <div>
      {/* item 1 - UI/Ux */}
      <div className="toolItem1">
        <img src={UIUX} alt="ux-ux tools" />
        <center>
          <p className="toolItem-text">UI/UX</p>
        </center>
      </div>

      {/* item 2 - Frontend */}
      <div className="toolItem2">
        <img src={Frontend} alt="ux-ux tools" />
        <center>
          <p className="toolItem-text">Frontend</p>
        </center>
      </div>

      {/* item 3 - Backend */}
      <div className="toolItem3">
        <img src={Backend} alt="ux-ux tools" />
        <center>
          <p className="toolItem-text">Backend</p>
        </center>
      </div>

      {/* item 3 - Backend */}
      <div className="toolItem4">
        <img src={Others} alt="ux-ux tools" />
        <center>
          <p className="toolItem-text">Others</p>
        </center>
      </div>
    </div>
  );
}

export default ToolItems;
