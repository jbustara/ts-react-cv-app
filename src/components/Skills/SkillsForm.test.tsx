import { fireEvent, render, screen } from "@testing-library/react";
import SkillsForm from "./SkillsForm";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import userEvent from "@testing-library/user-event";
import { FormValues } from "../../constants";

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("SkillsForm component", () => {
  it("Renders SkillsForm component", () => {
    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    );

    //renders a form with 2 inputs and a button
    expect(
      screen.getByRole("textbox", { name: FormValues.NAME_LABEL })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("spinbutton", { name: FormValues.RANGE_LABEL })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: FormValues.BUTTON_SUBMIT_FORM_NAME })
    ).toBeInTheDocument();
  });

  it("WHen user click button post the data", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    );

    //mocking post skills
    fetchMock.mockResponseOnce(JSON.stringify({ success: "ok" }));

    //Filling form
    const name = screen.getByRole("textbox", {
      name: "Skill name",
    }) as HTMLInputElement;
    fireEvent.change(name, { target: { value: "JavaScript" } });

    const range = screen.getByRole("spinbutton", {
      name: FormValues.RANGE_LABEL,
    }) as HTMLInputElement;
    fireEvent.change(range, { target: { value: 50 } });

    //checking values

    //CLick button to post skill and fetch again all skills
    await user.click(
      screen.getByRole("button", { name: FormValues.BUTTON_SUBMIT_FORM_NAME })
    );
    expect(fetchMock.mock.calls.length).toBe(2);

    //values cleared
    expect(name.value).toBe("");
    expect(range.value).toBe("");
  });
});
