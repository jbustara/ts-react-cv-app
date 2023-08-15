import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface props {
  icon: IconProp;
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ icon, text, onClick }: props) => {
  return (
    <button className="button" onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
