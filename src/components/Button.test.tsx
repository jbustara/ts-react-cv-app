import { render, screen } from "@testing-library/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Button from "./Button";
library.add(faUser);

describe("Button component", () => {
  it("Renders button component", () => {
    const { container } = render(
      <Button text="test" icon={["fas", "user"]} onClick={() => {}} />
    );
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
