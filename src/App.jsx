import { Routes, Route } from "react-router-dom";
import dataArr from "./assets/data.json";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import "./App.css";

function App() {
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
                  logo={obj.logo}
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
