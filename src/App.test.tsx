import { render, screen } from "@testing-library/react";
import HomePage from "./pages/Home/HomePage";
import InnerPage from "./pages/Inner/InnerPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
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
import { education } from "./services/db";
import App from "./App";

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
//mocking nanoid
jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

//mocking Fetch
beforeEach(() => {
  fetchMock.resetMocks();
});

describe("App component", () => {
  it("Renders HomePage component", async () => {
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/inner",
              element: <InnerPage />,
            },
          ],
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
    expect(screen.getByText("Juan Camilo Bustamante")).toBeInTheDocument();
    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Know more" })
    ).toBeInTheDocument();
  });
});
