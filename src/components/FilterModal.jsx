import locationIcon from "../assets/desktop/icon-location.svg";
import "./FilterModal.css";

function FilterModal({ onSearchLocationQuery }) {
  return (
    <div className="header__search--filter-modal">
      <div className="header__search--filter-modal--wrapper">
        <img
          src={locationIcon}
          alt=""
          className="header__search--filter-modal--input-location-icon"
          aria-hidden="true"
        />
        <input
          type="search"
          name="search"
          id="header__search--filter-modal--input-location"
          className=""
          placeholder="Filter by location..."
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSearchLocationQuery(event.target.value.trim());
            }
          }}
        />
      </div>
      <div className="header__search--filter-modal--button-wrapper">
        <div className="header__search--filter-modal--checkbox-wrapper">
          <input
            type="checkbox"
            name="fulltime"
            id="header__search--filter-modal--checkbox"
          />
          <label htmlFor="fulltime">Full Time</label>
        </div>
        <button
          type="submit"
          id="header__search--filter-modal--search"
          onClick={() => {
            onSearchLocationQuery(
              document
                .getElementById("header__search--filter-modal--input-location")
                .value.trim()
            );
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
