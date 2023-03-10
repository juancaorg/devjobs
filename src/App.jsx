import { Routes, Route } from "react-router-dom";
import dataArr from "./assets/data.json";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css";

// Logos 'absolute' import for the production build (npm run build).
// For some reason, if I try to read the route without importing,
// React doesn't import the files by itself on the prod build.
// Strangely, in the CSS Header I don't use import for the image,
// but it goes to the prod build anyway. Investigate this later.
// Not ideal, but it works.
import blogrLogo from "./assets/logos/blogr.svg";
import coffeeroastersLogo from "./assets/logos/coffeeroasters.svg";
import creativeLogo from "./assets/logos/creative.svg";
import crowdfundLogo from "./assets/logos/crowdfund.svg";
import makerLogo from "./assets/logos/maker.svg";
import mastercraftLogo from "./assets/logos/mastercraft.svg";
import officeliteLogo from "./assets/logos/officelite.svg";
import podLogo from "./assets/logos/pod.svg";
import pomodoroLogo from "./assets/logos/pomodoro.svg";
import scootLogo from "./assets/logos/scoot.svg";
import typemasterLogo from "./assets/logos/typemaster.svg";
import vectorLogo from "./assets/logos/vector.svg";

function App() {
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

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {dataArr.map((obj) => {
          const routesList = (
            <Route
              key={obj.id}
              path={`${obj.company}-${obj.id}/`
                .split(" ")
                .join("")
                .toLowerCase()}
              element={
                <Detail
                  company={obj.company}
                  logo={logosObj[obj.company.split(" ").join("").toLowerCase()]}
                  logoBackground={obj.logoBackground}
                  position={obj.position}
                  postedAt={obj.postedAt}
                  contract={obj.contract}
                  location={obj.location}
                  website={obj.website}
                  apply={obj.apply}
                  description={obj.description}
                  requirements={obj.requirements}
                  role={obj.role}
                />
              }
            />
          );
          return routesList;
        })}
      </Routes>
    </>
  );
}

export default App;
