import { render, screen } from "@testing-library/react";
import Feedback from "./Feedback";
import { feedbacks } from "../../cv-data";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Feedback component", () => {
  it("Renders Feedback component", () => {
    render(<Feedback feedbacks={feedbacks} />);
    //renders 2 names
    expect(screen.getByText(feedbacks[0].reporter.name)).toBeInTheDocument();
    expect(screen.getByText(feedbacks[1].reporter.name)).toBeInTheDocument();

    //renders 2 images
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
