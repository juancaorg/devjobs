import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <ToggleSwitch />
      </div>
    </header>
  );
}

export default Header;
