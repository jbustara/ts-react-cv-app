import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";
import { portfolio } from "../constants";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Portfolio component", () => {
  it("Renders Portfolio component", () => {
    render(<Portfolio portfolio={portfolio} />);

    //renders 3 datas with 3 links
    expect(screen.getByText(portfolio[0].title)).toBeInTheDocument();
    expect(screen.getByText(portfolio[1].title)).toBeInTheDocument();
    expect(screen.getByText(portfolio[2].title)).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBe(3);
    expect(screen.getAllByRole("img").length).toBe(3);
  });
});
