import { useState } from "react";

import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIcon from "../assets/desktop/icon-search.svg";
import "./SearchBar.css";

import Backdrop from "./Backdrop";
import FilterModal from "./FilterModal";

function SearchBar({ onSearchTitleQuery, onSearchLocationQuery }) {
  const [showFilterModal, setShowFilterModal] = useState();

  function showFilterModalHandler() {
    setShowFilterModal(true);
  }

  function closeFilterModalHandler() {
    setShowFilterModal(false);
  }

  function searchLocationQueryHandler(enteredSearchLocationQuery) {
    onSearchLocationQuery(enteredSearchLocationQuery);
  }

  return (
    <div className="header__search">
      <input
        type="search"
        name="search"
        id="header__search--input"
        className=""
        placeholder="Filter by title..."
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearchTitleQuery(event.target.value.trim());
          }
        }}
      />
      <button id="header__search--filter" onClick={showFilterModalHandler}>
        <img src={filterIcon} alt="" aria-hidden="true" />
      </button>
      <button
        type="submit"
        id="header__search--submit"
        onClick={() => {
          onSearchTitleQuery(
            document.getElementById("header__search--input").value.trim()
          );
        }}
      >
        <img src={searchIcon} alt="" aria-hidden="true" />
      </button>
      {showFilterModal && <Backdrop onClick={closeFilterModalHandler} />}
      {showFilterModal && (
        <FilterModal onSearchLocationQuery={searchLocationQueryHandler} />
      )}
    </div>
  );
}

export default SearchBar;
