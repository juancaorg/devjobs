import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIcon from "../assets/desktop/icon-search.svg";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="header__search">
      <input
        type="search"
        name="search"
        id="header__search--input"
        className=""
        placeholder="Filter by title..."
      />
      <button id="header__search--filter">
        <img src={filterIcon} alt="" aria-hidden="true" />
      </button>
      <button type="submit" id="header__search--submit">
        <img src={searchIcon} alt="" aria-hidden="true" />
      </button>
    </div>
  );
}

export default SearchBar;
