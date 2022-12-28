import searchIcon from "../assets/desktop/icon-search.svg";
import "./BigSearchBar.css";

function BigSearchBar() {
  return (
    <div className="header__bigsearch">
      <input
        type="search"
        name="search"
        id="header__bigsearch--input-title"
        className="header__bigsearch--input"
        placeholder="Filter by title..."
      />
      <input
        type="search"
        name="search"
        id="header__bigsearch--input-location"
        className="header__bigsearch--input"
        placeholder="Filter by location..."
      />
    </div>
  );
}

export default BigSearchBar;
