import { useEffect, useRef } from "react";

export const useOuterClick = (callback) => {
  const innerRef = useRef();
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (
        innerRef.current &&
        callbackRef.current &&
        !innerRef.current.contains(e.target) &&
        !~e.target.className.indexOf("react-datepicker")
      ) {
        callbackRef.current(e);
      }
    }
  }, []);

  return innerRef;
};
