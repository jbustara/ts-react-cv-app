import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import PhotoBox from "../../components/PhotoBox";
import { profile, TITLE, DESCRIPTION } from "../../constants";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <PhotoBox {...profile} />
      <header>{TITLE}</header>
      <p>{DESCRIPTION}</p>
      <Button text="Know more" onClick={() => navigate("/inner")} />
    </div>
  );
};

export default HomePage;
