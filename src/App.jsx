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
              element={<Detail position={obj.position} />}
            />
          );
          return routesList;
        })}
      </Routes>
    </>
  );
}

export default App;
