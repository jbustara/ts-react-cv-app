import { render, screen } from "@testing-library/react";
import Panel from "./Panel";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  faUser,
  faPen,
  faGraduationCap,
  faSuitcase,
  faLocationArrow,
  faComment,
  faBars,
  faChevronLeft,
  faGem,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faUser,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGraduationCap,
  faBars,
  faChevronLeft,
  faGem
);
describe("Panel component", () => {
  it("Renders Panel component", () => {
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <Panel visibility={true} toggleVisibility={() => false} />,
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );
    const { container } = render(<RouterProvider router={router} />);

    //renders 7 links and 8 svg (7 of the panel, + burger icon, + button back)
    expect(screen.getAllByRole("link").length).toBe(7);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll("svg").length).toBe(9);
  });
});
