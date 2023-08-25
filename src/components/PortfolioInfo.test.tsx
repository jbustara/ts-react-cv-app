import { render, screen } from "@testing-library/react";
import PortfolioInfo from "./PortfolioInfo";

describe("PortfolioInfo component", () => {
  it("Renders PortfolioInfo component", () => {
    render(
      <PortfolioInfo
        title="test title"
        description="test description"
        source="https://test.com"
      />
    );

    //renders title, description and a link
    expect(screen.getByText("test title")).toBeInTheDocument();
    expect(screen.getByText("test description")).toBeInTheDocument();
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
