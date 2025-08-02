import { useState, useEffect } from "react";

const useMobile = (mobileBreakpoint = 600) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
    const updateMatch = () => setMatches(media.matches);

    // Set initial value
    updateMatch();

    // Add listener
    media.addEventListener("change", updateMatch);

    // Cleanup
    return () => media.removeEventListener("change", updateMatch);
  }, [mobileBreakpoint]);

  return matches;
};

export default useMobile;
