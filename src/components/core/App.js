import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../main/Main"
import History from "../pages/History/History";
import Schedule from "../pages/Schedule/Schedule";
import Error from "../pages/Error/Error";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/about" element={<History />} />
            <Route exact path="/schedule" element={<Schedule />} />
            <Route exact path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
