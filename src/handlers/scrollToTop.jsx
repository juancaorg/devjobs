import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on every transtion react-router.
// Credit:
// https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition/61602724#61602724

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
