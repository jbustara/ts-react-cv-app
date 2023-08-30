import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import useCurrentSection from "../../useCurrentSection";
import { Sections } from "../../constants";

const Navigation = () => {
  const { currentSection } = useCurrentSection();

  return (
    <ul className="navigation">
      <li>
        <HashLink
          smooth
          to={`#${Sections.ABOUT_ID}`}
          className={currentSection === Sections.ABOUT_ID ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "user"]} />
          <span>{Sections.ABOUT_NAME}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.EDUCATION}`}
          className={currentSection === Sections.EDUCATION ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
          <span>{Sections.EDUCATION}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.SKILLS}`}
          className={currentSection === Sections.SKILLS ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "gem"]} />
          <span>{Sections.SKILLS}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.EXPERIENCE}`}
          className={currentSection === Sections.EXPERIENCE ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span>{Sections.EXPERIENCE}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.PORTFOLIO}`}
          className={currentSection === Sections.PORTFOLIO ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "suitcase"]} />
          <span>{Sections.PORTFOLIO}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.CONTACTS}`}
          className={currentSection === Sections.CONTACTS ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "location-arrow"]} />
          <span>{Sections.CONTACTS}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${Sections.FEEDBACK}`}
          className={currentSection === Sections.FEEDBACK ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "comment"]} />
          <span>{Sections.FEEDBACK}</span>
        </HashLink>
      </li>
    </ul>
  );
};

export default Navigation;
