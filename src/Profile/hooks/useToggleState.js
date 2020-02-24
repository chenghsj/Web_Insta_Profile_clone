import { useState } from "react";

const useToggleState = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState(!state);
  };
  return [state, toggleState];
};

export default useToggleState;
