import { useState, useEffect } from "react";

import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import "./ToggleSwitch.css";

function ToggleSwitch() {
  const [toggleState, setToggleState] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Add Toggle Switch input event listener
  // AFTER the component finishes rendering.
  useEffect(() => {
    // Grab root element.
    const rootElement = document.documentElement;
    // Grab toggle switch input element.
    const toggleSwitch = document.getElementById("header__toggle--switch");
    // Set toggle switch to current theme state (if the OS is set to dark mode).
    toggleSwitch.checked = toggleState;

    toggleSwitch.addEventListener("change", () => {
      // If the OS is set to dark mode...
      if (toggleSwitch.checked) {
        // ...apply the .dark-theme class to override the default light styles
        rootElement.classList.add("dark-theme");
        rootElement.classList.remove("light-theme");
        setToggleState(true);
      } else {
        rootElement.classList.add("light-theme");
        rootElement.classList.remove("dark-theme");
        setToggleState(false);
      }
    });
  }, []);

  return (
    <div className="header__toggle">
      <img src={sunIcon} alt="" aria-hidden="true" />
      <label htmlFor="header__toggle--switch"></label>
      <input
        className="header__toggle--switch"
        id="header__toggle--switch"
        aria-checked="false"
        type="checkbox"
        role="switch"
      />
      <img src={moonIcon} alt="" aria-hidden="true" />
    </div>
  );
}

export default ToggleSwitch;
