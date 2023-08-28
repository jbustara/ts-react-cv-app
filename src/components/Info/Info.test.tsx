import { render, screen } from "@testing-library/react";
import Info from "./Info";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Info component", () => {
  it("Renders Info component", () => {
    render(<Info title="test title" text="test text" />);
    //renders title and test
    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(screen.getByText("test text")).toBeInTheDocument();
  });
});
