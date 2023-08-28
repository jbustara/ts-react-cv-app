import { render, screen } from "@testing-library/react";
import Timeline from "./Timeline";
import { education } from "../../services/db";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("TimeLine component", () => {
  it("Renders TimeLine component", () => {
    render(<Timeline education={education} />);

    //renders 4 education data
    expect(screen.getByText(education[0].text)).toBeInTheDocument();
    expect(screen.getByText(education[1].text)).toBeInTheDocument();
    expect(screen.getByText(education[2].text)).toBeInTheDocument();
    expect(screen.getByText(education[3].text)).toBeInTheDocument();
  });
});
