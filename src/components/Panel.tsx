import PhotoBox from "./PhotoBox";
import Navigation from "./Navigation";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { profile } from "../constants";
import { useNavigate } from "react-router-dom";

interface props {
  visibility: boolean;
  toggleVisibility: React.MouseEventHandler;
}

const Panel = ({ visibility, toggleVisibility }: props) => {
  const navigate = useNavigate();
  return (
    <aside className="panel">
      {visibility && (
        <div className="panel-navigation">
          <div>
            <PhotoBox {...profile} />
            <Navigation />
          </div>

          <Button
            text="Go back"
            icon={["fas", "chevron-left"]}
            onClick={() => navigate("/")}
          />
        </div>
      )}
      <div className="burger" onClick={toggleVisibility}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
    </aside>
  );
};

export default Panel;
