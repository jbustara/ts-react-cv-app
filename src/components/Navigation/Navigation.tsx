import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import useCurrentSection from "../../useCurrentSection";

const Navigation = () => {
  const { currentSection } = useCurrentSection();

  return (
    <ul className="navigation">
      <li>
        <HashLink
          smooth
          to="#about"
          className={currentSection === "about" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "user"]} />
          <span>About me</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#education"
          className={currentSection === "education" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
          <span>Education</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#skills"
          className={currentSection === "skills" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "gem"]} />
          <span>Skills</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#experience"
          className={currentSection === "experience" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span>Experience</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#portfolio"
          className={currentSection === "portfolio" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "suitcase"]} />
          <span>Portfolio</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#contacts"
          className={currentSection === "contacts" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "location-arrow"]} />
          <span>Contacts</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to="#feedback"
          className={currentSection === "feedback" ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "comment"]} />
          <span>Feedback</span>
        </HashLink>
      </li>
    </ul>
  );
};

export default Navigation;
