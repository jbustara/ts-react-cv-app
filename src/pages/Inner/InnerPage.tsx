import { useEffect } from "react";
import { fetchEducation } from "../../features/education/educationSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useVisibility from "../../useVisibility";

import Panel from "../../components/Panel/Panel";
import Box from "../../components/Box/Box";
import Expertise from "../../components/Expertise/Expertise";
import Feedback from "../../components/Feedback/Feedback";
import Timeline from "../../components/Timeline/Timeline";
import Address from "../../components/Address/Address";
import Portfolio from "../../components/Portfolio/Portfolio";
import {
  BUTTON_SHOW_FORM_TEXT,
  ERROR_FETCH_EDUCATION,
  Sections,
} from "../../constants";
import {
  aboutMe,
  contacts,
  experiences,
  feedbacks,
  portfolio,
} from "../../cv-data";
import { Status } from "../../types";
import SkillsForm from "../../components/Skills/SkillsForm";
import Skills from "../../components/Skills/Skills";
import { fetchSkills, openSkills } from "../../features/skills/skillsSlice";
import Button from "../../components/Button/Button";

const InnerPage = () => {
  const { visibility, toggleVisibility } = useVisibility();

  const education = useAppSelector((state) => state.educations.educations);
  const status = useAppSelector((state) => state.educations.status);
  const skills = useAppSelector((state) => state.skills.skills);
  const skillsIsOpen = useAppSelector((state) => state.skills.skillsIsOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEducation());
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div className="inner-page">
      <Panel visibility={visibility} toggleVisibility={toggleVisibility} />

      <div className={visibility ? "content" : "content wide"}>
        <Box title={Sections.ABOUT_NAME} id={Sections.ABOUT_ID}>
          <p>{aboutMe}</p>
        </Box>

        <Box title={Sections.EDUCATION} id={Sections.EDUCATION}>
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

        <section className="skill-box" id={Sections.SKILLS}>
          <Box title={Sections.SKILLS} id="">
            <>{skillsIsOpen && <SkillsForm />}</>
            <Skills skills={skills} />
          </Box>
          <Button
            icon={["fas", "pen-to-square"]}
            text={BUTTON_SHOW_FORM_TEXT}
            onClick={() => dispatch(openSkills())}
          />
        </section>

        <Box title={Sections.EXPERIENCE} id={Sections.EXPERIENCE}>
          <Expertise experiences={experiences} />
        </Box>

        <Box title={Sections.PORTFOLIO} id={Sections.PORTFOLIO}>
          <Portfolio portfolio={portfolio} />
        </Box>

        <Box title={Sections.CONTACTS} id={Sections.CONTACTS}>
          <Address contacts={contacts} />
        </Box>

        <Box title={Sections.FEEDBACK} id={Sections.FEEDBACK}>
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
