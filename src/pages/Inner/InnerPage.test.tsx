import { render, screen, waitFor } from "@testing-library/react";
import HomePage from "../Home/HomePage";
import InnerPage from "./InnerPage";
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
import { education } from "../../services/db";
import { BUTTON_PANEL_TEXT, FORM_VALUES, SECTIONS } from "../../constants";
import { PROFILE, TITLE } from "../../cv-data";

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

describe("Inner page", () => {
  it("Renders InnerPage component", async () => {
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/inner",
          element: <InnerPage />,
        },
      ],
      {
        initialEntries: ["/inner"],
        initialIndex: 0,
      }
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    //mocking fetch education and skills
    fetchMock.mockResponseOnce(JSON.stringify(education));
    fetchMock.mockResponseOnce(JSON.stringify([{ name: "JS", range: 50 }]));
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    expect(screen.getByText(PROFILE.name)).toBeInTheDocument();
    //2 each: Panel and Content
    expect(screen.getAllByText(SECTIONS.AboutName).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Education).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Skills).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Experience).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Portfolio).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Contacts).length).toBe(2);
    expect(screen.getAllByText(SECTIONS.Feedback).length).toBe(2);
    //2 buttons: back and scroll upo
    expect(screen.getAllByRole("button").length).toBe(2);
  });

  it("Navigate to HomePage when user click the button", async () => {
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
        initialEntries: ["/inner"],
        initialIndex: 0,
      }
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    //mocking fetch education and skills
    fetchMock.mockResponseOnce(JSON.stringify(education));
    fetchMock.mockResponseOnce(JSON.stringify([{ name: "JS", range: 50 }]));
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    await user.click(screen.getByRole("button", { name: BUTTON_PANEL_TEXT }));
    expect(screen.getByText(TITLE)).toBeInTheDocument();
  });

  it("Show Form component when click in button", async () => {
    const user = userEvent.setup();
    //Mocking route to rendering App (Subscribe inside)
    const router = createMemoryRouter(
      [
        {
          path: "/inner",
          element: <InnerPage />,
        },
      ],
      {
        initialEntries: ["/inner"],
        initialIndex: 0,
      }
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    //mocking fetch education and skills
    fetchMock.mockResponseOnce(JSON.stringify(education));
    fetchMock.mockResponseOnce(JSON.stringify([{ name: "JS", range: 50 }]));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(2);
    });

    await user.click(screen.getByRole("button", { name: "Open edit" }));

    //renders a form with 2 inputs and a button
    expect(
      screen.getByRole("textbox", { name: FORM_VALUES.NameLabel })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: FORM_VALUES.RangeLabel })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: FORM_VALUES.ButtonSubmitFormName })
    ).toBeInTheDocument();
  });
});
