import { useState } from "react";

import filterIcon from "../assets/mobile/icon-filter.svg";
import searchIcon from "../assets/desktop/icon-search.svg";
import "./SearchBar.css";

import Backdrop from "./Backdrop";
import FilterModal from "./FilterModal";

function SearchBar() {
  const [showFilterModal, setShowFilterModal] = useState();
  const [searchTitleInput, setSearchTitleInput] = useState("");

  function showFilterModalHandler() {
    setShowFilterModal(true);
  }

  function closeFilterModalHandler() {
    setShowFilterModal(false);
  }

  function searchItemsByTitle(searchTitleQuery) {
    setSearchTitleInput(searchTitleQuery.trim());
  }

  // TODO: lift searchTitleInput up.
  console.log(searchTitleInput);

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
            searchItemsByTitle(event.target.value);
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
          searchItemsByTitle(
            document.getElementById("header__search--input").value
          );
        }}
      >
        <img src={searchIcon} alt="" aria-hidden="true" />
      </button>
      {showFilterModal && <Backdrop onClick={closeFilterModalHandler} />}
      {showFilterModal && <FilterModal />}
    </div>
  );
}

export default SearchBar;
