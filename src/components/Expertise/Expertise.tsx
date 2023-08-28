import { nanoid } from "nanoid";
import { ExperienceData } from "../../types";

interface props {
  experiences: ExperienceData[];
}

const Expertise = ({ experiences = [] }: props) => {
  return (
    <ul className="expertise-list">
      {experiences.map((experience) => {
        const {
          date,
          info: { company, job, description },
        } = experience;
        return (
          <li key={nanoid()}>
            <div className="expertise-list-date">
              <h3>{company}</h3>
              <span className="date">{date}</span>
            </div>
            <div className="expertise-list-info">
              <h3>{job}</h3>
              <span>{description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Expertise;
