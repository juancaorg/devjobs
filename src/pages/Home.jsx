import Header from "../components/Header";
import JobsGrid from "../components/JobsGrid";
import LoadMoreButton from "../components/LoadMoreButton";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <JobsGrid />
      <LoadMoreButton />
      <Footer />
    </>
  );
}

export default Home;
