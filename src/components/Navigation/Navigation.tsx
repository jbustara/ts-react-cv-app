import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import useCurrentSection from "../../useCurrentSection";
import { SECTIONS } from "../../constants";

const Navigation = () => {
  const { currentSection } = useCurrentSection();

  return (
    <ul className="navigation">
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.AboutId}`}
          className={currentSection === SECTIONS.AboutId ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "user"]} />
          <span>{SECTIONS.AboutName}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Education}`}
          className={currentSection === SECTIONS.Education ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
          <span>{SECTIONS.Education}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Skills}`}
          className={currentSection === SECTIONS.Skills ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "gem"]} />
          <span>{SECTIONS.Skills}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Experience}`}
          className={currentSection === SECTIONS.Experience ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span>{SECTIONS.Experience}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Portfolio}`}
          className={currentSection === SECTIONS.Portfolio ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "suitcase"]} />
          <span>{SECTIONS.Portfolio}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Contacts}`}
          className={currentSection === SECTIONS.Contacts ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "location-arrow"]} />
          <span>{SECTIONS.Contacts}</span>
        </HashLink>
      </li>
      <li>
        <HashLink
          smooth
          to={`#${SECTIONS.Feedback}`}
          className={currentSection === SECTIONS.Feedback ? "actived" : ""}
        >
          <FontAwesomeIcon icon={["fas", "comment"]} />
          <span>{SECTIONS.Feedback}</span>
        </HashLink>
      </li>
    </ul>
  );
};

export default Navigation;
