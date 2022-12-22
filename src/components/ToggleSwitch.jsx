import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import "./ToggleSwitch.css";

function ToggleSwitch() {
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
