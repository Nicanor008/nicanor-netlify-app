import "./footer.css";
import HrLine from "../../images/projects/HrLine.svg";
import Gmail from "../../images/projects/mail.svg";

function Footer() {
  return (
    <div className="footer">
      <span className="footer-text">Talk to me, Let’s Chat</span>
      <img
        src={HrLine}
        alt="horizontal line"
        className="footer-hrLine"
        height="5"
        width="85%"
      />
      <div className="footer-contacts">
        <center>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nicanorkorir008@gmail.com&su=Talk to me, Let's Chat&body=Message"
            target="blank"
            rel="nofollow noreferrer"
          >
            <img
              src={Gmail}
              alt="email"
              className="footer-contacts-mail"
              height=""
              width=""
            />
          </a>
        </center>
      </div>
    </div>
  );
}

export default Footer;
