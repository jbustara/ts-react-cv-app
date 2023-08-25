import { render, screen } from "@testing-library/react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Address from "./Address";
import { contacts } from "../constants";
library.add(faPhone, faEnvelope, faLinkedin, faGithub);

describe("Address component", () => {
  it("Renders address component", () => {
    const { container } = render(<Address contacts={contacts} />);

    //4 fawesome icons
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.querySelectorAll("svg").length).toBe(4);

    //texts from data
    expect(screen.getByText(contacts[0].text)).toBeInTheDocument();
    expect(screen.getByText(contacts[1].text)).toBeInTheDocument();
    expect(screen.getByText(contacts[2].text)).toBeInTheDocument();
    expect(screen.getByText(contacts[3].text)).toBeInTheDocument();

    //href configured from data
    expect(screen.getByText(contacts[0].text)).toHaveAttribute(
      "href",
      contacts[0].href
    );
    expect(screen.getByText(contacts[1].text)).toHaveAttribute(
      "href",
      contacts[1].href
    );
    expect(screen.getByText(contacts[2].text)).toHaveAttribute(
      "href",
      contacts[2].href
    );
    expect(screen.getByText(contacts[3].text)).toHaveAttribute(
      "href",
      contacts[3].href
    );
  });
});
