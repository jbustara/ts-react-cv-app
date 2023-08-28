import { Outlet } from "react-router-dom";

import {
  faUser,
  faPen,
  faGraduationCap,
  faSuitcase,
  faLocationArrow,
  faComment,
  faBars,
  faPhone,
  faEnvelope,
  faChevronLeft,
  faChevronUp,
  faRotate,
  faPenToSquare,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faUser,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGraduationCap,
  faChevronLeft,
  faBars,
  faPhone,
  faEnvelope,
  faLinkedin,
  faGithub,
  faChevronUp,
  faRotate,
  faPenToSquare,
  faGem
);

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
