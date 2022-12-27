import locationIcon from "../assets/desktop/icon-location.svg";
import "./FilterModal.css";

function FilterModal() {
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
          id="header__search--filter-modal--input-location-icon"
          className=""
          placeholder="Filter by location..."
        />
      </div>
      <h1>Hello modal! 👋</h1>
    </div>
  );
}

export default FilterModal;
