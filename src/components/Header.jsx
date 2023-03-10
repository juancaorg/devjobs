import { useState, useEffect } from "react";

import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";
import SearchBar from "./SearchBar";
import BigSearchBar from "./BigSearchBar";
import "./Header.css";

function Header() {
  // React conditionally render based on viewport size.
  // Credit to @foakesm on Stack Overflow:
  // https://stackoverflow.com/questions/46586165/react-conditionally-render-based-on-viewport-size/60811141#60811141

  const [isTablet, setTablet] = useState(window.innerWidth >= 768);

  function updateMedia() {
    setTablet(window.innerWidth >= 768);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <ToggleSwitch />
      </div>
      {isTablet ? <BigSearchBar /> : <SearchBar />}
    </header>
  );
}

export default Header;
