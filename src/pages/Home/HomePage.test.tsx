import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import InnerPage from "../Inner/InnerPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../app/store";
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
jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Home Page", () => {
  it("Renders HomePage component", () => {
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Juan Camilo Bustamante")).toBeInTheDocument();
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Know more" })
    ).toBeInTheDocument();
  });

  it("Navigate to InnerPage when user click the button", async () => {
    const user = userEvent.setup();
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/inner",
          element: <InnerPage />,
        },
      ],
      {
        initialEntries: ["/"],
        initialIndex: 0,
      }
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    await user.click(screen.getByRole("button", { name: "Know more" }));
    expect(screen.getAllByText("Skills").length).toBe(2);
  });
});
