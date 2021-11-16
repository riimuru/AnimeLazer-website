import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, P404 } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<P404 />} />
      </Routes>
    </Router>
  );
};

export default App;
