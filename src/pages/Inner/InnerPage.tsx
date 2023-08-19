import { useEffect } from "react";
import { fetchEducation } from "../../features/education/educationSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useVisibility from "../../useVisibility";

import Panel from "../../components/Panel";
import Box from "../../components/Box";
import Expertise from "../../components/Expertise";
import Feedback from "../../components/Feedback";
import Timeline from "../../components/Timeline";
import Address from "../../components/Address";
import Portfolio from "../../components/Portfolio";
import {
  ERROR_FETCH_EDUCATION,
  aboutMe,
  contacts,
  experiences,
  feedbacks,
  portfolio,
} from "../../constants";
import { Status } from "../../types";
import SkillsForm from "../../components/SkillsForm";
import Skills from "../../components/Skills";
import { fetchSkills } from "../../features/skills/skillsSlice";

const InnerPage = () => {
  const { visibility, toggleVisibility } = useVisibility();
  const education = useAppSelector((state) => state.educations.educations);
  const status = useAppSelector((state) => state.educations.status);
  const skills = useAppSelector((state) => state.skills.skills);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEducation());
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div className="inner-page">
      <Panel visibility={visibility} toggleVisibility={toggleVisibility} />
      <div className={visibility ? "content" : "content wide"}>
        <Box title="About me" id="about">
          <p>{aboutMe}</p>
        </Box>
        <Box title="Education" id="education">
          {status === Status.done ? (
            <Timeline education={education} />
          ) : status === Status.loading ? (
            <div className="loading">
              <FontAwesomeIcon icon={["fas", "rotate"]} spin />
            </div>
          ) : (
            <div className="error-fetch">{ERROR_FETCH_EDUCATION}</div>
          )}
        </Box>
        <Box title="Skills" id="skills">
          <SkillsForm />
          <Skills skills={skills} />
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
