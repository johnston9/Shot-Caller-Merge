/* Function used to allow the nav dropdown to close when
   clicked on or on the page outside of it */
import { useEffect, useRef, useState } from "react";

const useDropdownClick = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const refw = useRef(null);
  const refw1 = useRef(null);
  const refw2 = useRef(null);
  const refw3 = useRef(null);
  const refw4 = useRef(null);
  const reff = useRef(null);
  const reff1 = useRef(null);
  const reff2 = useRef(null);
  const reff3 = useRef(null);
  const reff4 = useRef(null);
  const reff5 = useRef(null);
  const reff6 = useRef(null);
  const refm = useRef(null);
  const refm1 = useRef(null);
  const refm2 = useRef(null);
  const refin = useRef(null);
  const refin2 = useRef(null);
  const refs = useRef(null);
  const refs1 = useRef(null);
  const refs2 = useRef(null);
  const refs3 = useRef(null);
  const refp = useRef(null);
  const refp1 = useRef(null);
  const refp2 = useRef(null);
  const refh1 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // workspace dropdown
      if (refw1.current && refw1.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refw2.current && refw2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refw3.current && refw3.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refh1.current && refh1.current.contains(event.target)) {
        return;
      }
      if (refw4.current && refw4.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refw.current && refw.current.contains(event.target)) {
        return;
      }
      // features dropdown
      if (reff1.current && reff1.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff2.current && reff2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff3.current && reff3.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff4.current && reff4.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff5.current && reff5.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff6.current && reff6.current.contains(event.target)) {
        setExpanded(false);
      }
      if (reff.current && reff.current.contains(event.target)) {
        return;
      }
      // moodshots dropdown
      if (refm1.current && refm1.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refm2.current && refm2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refin.current && refin.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refin2.current && refin2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refm.current && refm.current.contains(event.target)) {
        return;
      }
      // schedule dropdown
      if (refs1.current && refs1.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refs2.current && refs2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refs3.current && refs3.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refs.current && refs.current.contains(event.target)) {
        return;
      }
      // Profiles dropdown
      if (refp1.current && refp1.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refp2.current && refp2.current.contains(event.target)) {
        setExpanded(false);
      }
      if (refp.current && refp.current.contains(event.target)) {
        return;
      }
      // page and toggle icon
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return {
    expanded,
    setExpanded,
    ref,
    refw,
    refw1,
    refw2,
    refw3,
    refw4,
    reff,
    reff1,
    reff2,
    reff3,
    reff4,
    reff5,
    reff6,
    refm,
    refm1,
    refm2,
    refin,
    refin2,
    refs,
    refs1,
    refs2,
    refs3,
    refp,
    refp1,
    refp2,
    refh1,
  };
};

export default useDropdownClick;
