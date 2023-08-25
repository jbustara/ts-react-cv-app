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
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
  faUser,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGraduationCap
);
describe("Panel component", () => {
  it("Renders Panel component", () => {
    //Mocking route to rendering App (Subscribe inside)
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

    //renders 6 links and 6 svg
    expect(screen.getAllByRole("link").length).toBe(6);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll("svg").length).toBe(6);
  });
});
