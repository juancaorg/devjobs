import JobCard from "./JobCard";
import "./JobsGrid.css";

function JobsGrid() {
  return (
    <main className="main">
      <JobCard
        company={"Scoot"}
        logo={"/src/assets/logos/scoot.svg"}
        logoBackground={"hsl(36, 87%, 49%)"}
        position={"Senior Software Engineer"}
        postedAt={"5h ago"}
        contract={"Full Time"}
        location={"United Kingdom"}
      />
      <JobCard
        company={"Blogr"}
        logo={"/src/assets/logos/blogr.svg"}
        logoBackground={"hsl(13, 79%, 52%)"}
        position={"Haskell and PureScript Dev"}
        postedAt={"20h ago"}
        contract={"Part Time"}
        location={"United States"}
      />
    </main>
  );
}

export default JobsGrid;
