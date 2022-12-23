import dataArr from "../assets/data.json";
import JobCard from "./JobCard";
import "./JobsGrid.css";

function JobsGrid() {
  return (
    <main className="main">
      {dataArr.map((obj) => {
        const list = (
          <JobCard
            key={obj.id}
            company={obj.company}
            logo={
              "/src/assets/logos/" +
              obj.company.split(" ").join("").toLowerCase() +
              ".svg"
            }
            logoBackground={obj.logoBackground}
            position={obj.position}
            postedAt={obj.postedAt}
            contract={obj.contract}
            location={obj.location}
          />
        );
        return list;
      })}
    </main>
  );
}

export default JobsGrid;
