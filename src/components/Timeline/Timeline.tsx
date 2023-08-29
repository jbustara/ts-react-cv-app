import { nanoid } from "nanoid";
import Info from "../Info/Info";
import { EducationData } from "../../types";

interface props {
  education: EducationData[];
}

const Timeline = ({ education }: props) => {
  return (
    <ul className="timeline-list">
      {education.map((educationItem) => {
        const { date, title, text } = educationItem;
        return (
          <li key={nanoid()}>
            <strong className="timeline-date">{date}</strong>
            <div className="timeline-event">
              <Info title={title} text={text} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Timeline;
