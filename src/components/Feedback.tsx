import { nanoid } from "nanoid";
import Info from "./Info";
import { FeedbackData } from "../types";

interface props {
  feedbacks: FeedbackData[];
}

const Feedback = ({ feedbacks = [] }: props) => {
  return (
    <ul className="feedback">
      {feedbacks.map((feedback) => {
        const {
          text,
          reporter: { photoUrl, name, citeUrl },
        } = feedback;
        return (
          <li key={nanoid()}>
            <blockquote>
              <Info text={text} />
              <div className="feedback-reporter">
                <img src={photoUrl} alt="user" />
                <cite>
                  <span>{name}</span>
                  <a href={citeUrl}>somesite.com</a>
                </cite>
              </div>
            </blockquote>
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;
