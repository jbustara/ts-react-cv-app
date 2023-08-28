import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

jest.mock("nanoid", () => {
  return { nanoid: () => Math.random() };
});

describe("Skills component", () => {
  it("Renders Skills component", () => {
    render(
      <Skills
        skills={[
          { name: "Test1", range: 50 },
          { name: "Test2", range: 80 },
        ]}
      />
    );

    //renders 2 skills with style with equals to range passed as props

    const divTest1 = screen.getByText("Test1");
    expect(divTest1).toBeInTheDocument();
    const stylesDiv1 = window.getComputedStyle(divTest1);
    expect(stylesDiv1.width).toBe("50%");

    const divTest2 = screen.getByText("Test2");
    expect(divTest2).toBeInTheDocument();
    const stylesDiv2 = window.getComputedStyle(divTest2);
    expect(stylesDiv2.width).toBe("80%");
  });
});
