import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  faUser,
  faPen,
  faGraduationCap,
  faSuitcase,
  faLocationArrow,
  faComment,
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
  faGem
);
describe("Navigation component", () => {
  it("Renders Navigation component", () => {
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <Navigation />,
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );
    const { container } = render(<RouterProvider router={router} />);

    //renders 7 links and 7 svg
    expect(screen.getAllByRole("link").length).toBe(7);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll("svg").length).toBe(7);
  });
});
