import { nanoid } from "nanoid";
import { SkillData } from "../types";

interface props {
  skills: SkillData[];
}
const Skills = ({ skills = [] }: props) => {
  return (
    <div>
      {skills.map((skill) => {
        const { name } = skill;
        return <p key={nanoid()}>{name}</p>;
      })}
    </div>
  );
};

export default Skills;
