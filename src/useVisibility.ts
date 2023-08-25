import { useState } from "react";

const useVisibility = () => {
  const [visibility, setVisibility] = useState<boolean>(true);
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return {
    visibility,
    toggleVisibility,
  };
};

export default useVisibility;
