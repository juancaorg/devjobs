import { useState } from "react";

import Header from "../components/Header";
import JobsGrid from "../components/JobsGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [titleInputQuery, setTitleInputQuery] = useState("");
  const [locationInputQuery, setLocationInputQuery] = useState("");

  function setTitleInputQueryHandler(enteredSearchTitleQuery) {
    setTitleInputQuery(enteredSearchTitleQuery);
  }

  function setLocationInputQueryHandler(enteredSearchLocationQuery) {
    setLocationInputQuery(enteredSearchLocationQuery);
  }

  return (
    <>
      <Header
        onTitleQuery={setTitleInputQueryHandler}
        onLocationQuery={setLocationInputQueryHandler}
      />
      <JobsGrid
        titleQuery={titleInputQuery}
        locationQuery={locationInputQuery}
      />
      <LoadMoreButton />
      <Footer />
    </>
  );
}

export default Home;
