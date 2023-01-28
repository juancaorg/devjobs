import dataArr from "../assets/data.json";
import JobCard from "./JobCard";
import "./JobsGrid.css";

// Logos 'absolute' import for the production build (npm run build).
// For some reason, if I try to read the route without importing,
// React doesn't import the files by itself on the prod build.
// Strangely, in the CSS Header I don't use import for the image,
// but it goes to the prod build anyway. Investigate this later.
// Not ideal, but it works.
import blogrLogo from "../assets/logos/blogr.svg";
import coffeeroastersLogo from "../assets/logos/coffeeroasters.svg";
import creativeLogo from "../assets/logos/creative.svg";
import crowdfundLogo from "../assets/logos/crowdfund.svg";
import makerLogo from "../assets/logos/maker.svg";
import mastercraftLogo from "../assets/logos/mastercraft.svg";
import officeliteLogo from "../assets/logos/officelite.svg";
import podLogo from "../assets/logos/pod.svg";
import pomodoroLogo from "../assets/logos/pomodoro.svg";
import scootLogo from "../assets/logos/scoot.svg";
import typemasterLogo from "../assets/logos/typemaster.svg";
import vectorLogo from "../assets/logos/vector.svg";

function JobsGrid({ titleQuery, locationQuery }) {
  // Create logosObj for the logos routes.
  // This is made so you don't have touse eval().
  // For more info about not using eval, check MDN:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!

  // Got the idea to use an object as an alternative from
  // Delftstack: https://www.delftstack.com/howto/javascript/javascript-eval-alternative/
  const logosObj = {
    blogr: blogrLogo,
    coffeeroasters: coffeeroastersLogo,
    creative: creativeLogo,
    crowdfund: crowdfundLogo,
    maker: makerLogo,
    mastercraft: mastercraftLogo,
    officelite: officeliteLogo,
    pod: podLogo,
    pomodoro: pomodoroLogo,
    scoot: scootLogo,
    typemaster: typemasterLogo,
    vector: vectorLogo,
  };

  // Create a filtered dataArr depending on titleQuery.
  const filteredTitleDataArr = dataArr.filter((item) =>
    item.position.toLowerCase().includes(titleQuery.toLowerCase())
  );

  console.log(`Current location: ${locationQuery}`);

  return (
    <main className="main">
      {/* If titleQuery isn't empty, render JobCards corresponding to filteredTitleDataArr. */}
      {titleQuery.length > 1
        ? filteredTitleDataArr.map((obj) => (
            <JobCard
              key={obj.id}
              company={obj.company}
              logo={logosObj[obj.company.split(" ").join("").toLowerCase()]}
              logoBackground={obj.logoBackground}
              position={obj.position}
              postedAt={obj.postedAt}
              contract={obj.contract}
              location={obj.location}
              linkTo={`${obj.company}-${obj.id}/`
                .split(" ")
                .join("")
                .toLowerCase()}
            />
          ))
        : // Else, render all JobCards.
          dataArr.map((obj) => (
            <JobCard
              key={obj.id}
              company={obj.company}
              logo={logosObj[obj.company.split(" ").join("").toLowerCase()]}
              logoBackground={obj.logoBackground}
              position={obj.position}
              postedAt={obj.postedAt}
              contract={obj.contract}
              location={obj.location}
              linkTo={`${obj.company}-${obj.id}/`
                .split(" ")
                .join("")
                .toLowerCase()}
            />
          ))}
    </main>
  );
}

export default JobsGrid;
