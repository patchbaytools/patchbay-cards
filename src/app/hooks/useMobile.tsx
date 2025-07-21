import { useState, useEffect } from "react";

const useMobile = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px)");
    const updateMatch = () => setMatches(media.matches);

    // Set initial value
    updateMatch();

    // Add listener
    media.addEventListener("change", updateMatch);

    // Cleanup
    return () => media.removeEventListener("change", updateMatch);
  }, []);

  return matches;
};

export default useMobile;
