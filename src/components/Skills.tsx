import { nanoid } from "nanoid";
import { SkillData } from "../types";

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
        <span className="beginner">Begginer</span>
        <span className="proficient">Proficient</span>
        <span className="expert">Expert</span>
        <span className="master">Master</span>
      </div>
    </div>
  );
};

export default Skills;
