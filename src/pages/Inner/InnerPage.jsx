import Panel from "../../components/Panel";
import Box from "../../components/Box";
import Expertise from "../../components/Expertise";
import Feedback from "../../components/Feedback";
import Timeline from "../../components/Timeline";
import Address from "../../components/Address";
import Portfolio from "../../components/Portfolio";
import {
  aboutMe,
  contacts,
  education,
  experiences,
  feedbacks,
  portfolio,
} from "../../constants";
import useVisibility from "../../useVisibility";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InnerPage = () => {
  const { visibility, toggleVisibility } = useVisibility();

  return (
    <div className="inner-page">
      <Panel visibility={visibility} toggleVisibility={toggleVisibility} />
      <div className={visibility ? "content" : "content wide"}>
        <Box title="About me" id="about">
          <p>{aboutMe}</p>
        </Box>
        <Box title="Education" id="education">
          <Timeline education={education} />
        </Box>
        <Box title="Experience" id="experience">
          <Expertise experiences={experiences} />
        </Box>
        <Box title="Portfolio" id="portfolio">
          <Portfolio portfolio={portfolio} />
        </Box>
        <Box title="Contacts" id="contacts">
          <Address contacts={contacts} />
        </Box>
        <Box title="Feedbacks" id="feedback">
          <Feedback feedbacks={feedbacks} />
        </Box>
        <div className="return">
          <HashLink smooth to="#">
            <FontAwesomeIcon icon={["fas", "chevron-up"]} />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
