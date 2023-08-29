import PhotoBox from "../PhotoBox/PhotoBox";
import Navigation from "../Navigation/Navigation";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PROFILE } from "../../cv-data";
import { useNavigate } from "react-router-dom";
import { BUTTON_PANEL_TEXT } from "../../constants";

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
            <PhotoBox {...PROFILE} />
            <Navigation />
          </div>

          <Button
            text={BUTTON_PANEL_TEXT}
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
