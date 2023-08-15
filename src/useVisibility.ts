import { useState } from "react";

const useVisibility = () => {
  const [visibility, setVisibility] = useState(true);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return {
    visibility,
    toggleVisibility,
  };
};

export default useVisibility;
