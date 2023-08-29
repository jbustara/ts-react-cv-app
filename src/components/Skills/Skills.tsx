import { nanoid } from "nanoid";
import { SkillData } from "../../types";
import { SKILLS_AXES_NAMES } from "../../constants";

interface props {
  skills: SkillData[];
}
const Skills = ({ skills = [] }: props) => {
  return (
    <div className="skills-container">
      {skills.map((skill) => {
        const { name, range } = skill;
        return (
          <div
            key={nanoid()}
            className="skill-range"
            style={{ width: `${range}%` }}
          >
            {name}
          </div>
        );
      })}
      <div className="skill-axe-line">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="skill-axe">
        <span className="beginner">{SKILLS_AXES_NAMES.Begginer}</span>
        <span className="proficient">{SKILLS_AXES_NAMES.Proficient}</span>
        <span className="expert">{SKILLS_AXES_NAMES.Expert}</span>
        <span className="master">{SKILLS_AXES_NAMES.Master}</span>
      </div>
    </div>
  );
};

export default Skills;
