import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";
import SearchBar from "./SearchBar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Logo />
        <ToggleSwitch />
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
