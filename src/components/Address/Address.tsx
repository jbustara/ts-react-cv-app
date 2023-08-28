import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactData } from "../../types";

interface props {
  contacts: ContactData[];
}

const Address = ({ contacts = [] }: props) => {
  return (
    <address className="address">
      {contacts.map((contact: ContactData) => {
        const { id, icon, href, text, isWeb, media } = contact;
        return (
          <div className="address-contact" key={id}>
            <FontAwesomeIcon icon={icon} />
            <div className="address-description">
              <strong>{media}</strong>
              <a
                href={href}
                target={isWeb ? "_blank" : undefined}
                rel={isWeb ? "noreferrer" : undefined}
              >
                {text}
              </a>
            </div>
          </div>
        );
      })}
    </address>
  );
};

export default Address;
