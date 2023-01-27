import { useState } from "react";

import Header from "../components/Header";
import JobsGrid from "../components/JobsGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [titleInputQuery, setTitleInputQuery] = useState("");

  function setTitleInputQueryHandler(enteredSearchTitleQuery) {
    setTitleInputQuery(enteredSearchTitleQuery);
  }

  return (
    <>
      <Header onTitleQuery={setTitleInputQueryHandler} />
      <JobsGrid titleQuery={titleInputQuery} />
      <LoadMoreButton />
      <Footer />
    </>
  );
}

export default Home;
