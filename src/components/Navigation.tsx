import { HashLink as Link } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <Link to="#about" smooth>
          <FontAwesomeIcon icon={["fas", "user"]} />
          <span>About me</span>
        </Link>
      </li>
      <li>
        <Link to="#education" smooth>
          <FontAwesomeIcon icon={["fas", "graduation-cap"]} />
          <span>Education</span>
        </Link>
      </li>
      <li>
        <Link to="#experience" smooth>
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span>Experience</span>
        </Link>
      </li>
      <li>
        <Link to="#portfolio" smooth>
          <FontAwesomeIcon icon={["fas", "suitcase"]} />
          <span>Portfolio</span>
        </Link>
      </li>
      <li>
        <Link to="#contacts" smooth>
          <FontAwesomeIcon icon={["fas", "location-arrow"]} />
          <span>Contacts</span>
        </Link>
      </li>
      <li>
        <Link to="#feedback" smooth>
          <FontAwesomeIcon icon={["fas", "comment"]} />
          <span>Feedback</span>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
