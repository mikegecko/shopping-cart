import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom"


export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contactbar">
        <Link className="link"><TwitterIcon fontSize="large" /></Link>
        <Link className="link"><GitHubIcon fontSize="large" /></Link>
        <Link className="link"><InstagramIcon fontSize="large" /></Link>
        <Link className="link"><FacebookIcon fontSize="large" /></Link>
      </div>
      <h3>
        2629 Abner Road, Rib Lake <br /> Wisconsin, 54470
      </h3>
      <h4>Phone: 715-427-8717</h4>
    </div>
  );
}
