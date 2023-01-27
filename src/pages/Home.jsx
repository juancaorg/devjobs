import { useState } from "react";

import Header from "../components/Header";
import JobsGrid from "../components/JobsGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  console.log(`Home component: ${query}`);

  return (
    <>
      <Header onQuery={setQuery} />
      <JobsGrid titleQuery={query} />
      <LoadMoreButton />
      <Footer />
    </>
  );
}

export default Home;
