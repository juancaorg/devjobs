import searchIcon from "../assets/desktop/icon-search.svg";
import locationIcon from "../assets/desktop/icon-location.svg";
import "./BigSearchBar.css";

function BigSearchBar() {
  return (
    <div className="header__bigsearch">
      <img
        src={searchIcon}
        alt=""
        aria-hidden="true"
        className="header__bigsearch--searchicon"
      />
      <input
        type="search"
        name="search"
        id="header__bigsearch--input-title"
        className="header__bigsearch--input"
        placeholder="Filter by title..."
      />
      <img
        src={locationIcon}
        alt=""
        aria-hidden="true"
        className="header__bigsearch--locationicon"
      />
      <input
        type="search"
        name="search"
        id="header__bigsearch--input-location"
        className="header__bigsearch--input"
        placeholder="Filter by location..."
      />
      <div className="header__bigsearch--checkbox-wrapper">
        <input
          type="checkbox"
          name="fulltime"
          id="header__bigsearch--checkbox"
        />
        <label htmlFor="fulltime">Full Time</label>
      </div>
      <button type="submit" id="header__bigsearch--submit">
        Search
      </button>
    </div>
  );
}

export default BigSearchBar;
