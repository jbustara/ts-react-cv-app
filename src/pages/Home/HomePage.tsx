import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import PhotoBox from "../../components/PhotoBox/PhotoBox";
import { PROFILE, TITLE, DESCRIPTION } from "../../cv-data";
import { BUTTON_HOME_PAGE_TEXT } from "../../constants";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <PhotoBox {...PROFILE} />
      <header>{TITLE}</header>
      <p>{DESCRIPTION}</p>
      <Button text={BUTTON_HOME_PAGE_TEXT} onClick={() => navigate("/inner")} />
    </div>
  );
};

export default HomePage;
