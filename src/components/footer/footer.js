import "./footer.css";
import HrLine from "../../images/projects/HrLine.svg";
import Gmail from "../../images/projects/mail.svg";

function Footer() {
  return (
    <div className="footer">
      <span className="footer-text">Talk to me Let’s Chat</span>
      <img src={HrLine} alt="horizontal line" className="footer-hrLine" />
      <div className="footer-contacts">
        <center>
          <img src={Gmail} alt="email" className="footer-contacts-mail" />
        </center>
      </div>
    </div>
  );
}

export default Footer;
