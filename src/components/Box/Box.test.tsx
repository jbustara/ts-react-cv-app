import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  it("Renders Box component", () => {
    render(
      <Box title="test" id="testId">
        <div>children test</div>
      </Box>
    );
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getByText("children test")).toBeInTheDocument();
  });
});
