import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";

const socials = [
    {
        name: "Github",
        url: "https://github.com/LucasFernandez59",
        icon: faGithub,
        color: "#5DE512",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/",
        icon: faLinkedin,
        color: "#2EACE8",
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/",
        icon: faYoutube,
        color: "white",
    },
];

function Footer() {
    return (
      <footer className="footer text-white py-4">
        <div className="container d-flex justify-content-start">
          <section className="social-icons-wrapper d-flex">
            {socials.map(({ name, url, icon, color }) => (
              <div key={name} className="mx-4 transparent-bg">
                <a href={url} className={`icon ${name}`} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icon} className="footer-icon-size" style={{ color: color, fontSize:'2rem' }} />
                </a>
              </div>
            ))}
          </section>
        </div>
      </footer>
    );
  }
  

export default Footer;