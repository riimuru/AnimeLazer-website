import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Home, P404 } from "./pages";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const App = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <div
              style={{
                width: windowDimensions.width,
                height: windowDimensions.height,
              }}
            >
              <Canvas
                style={{
                  width: window.innerWidth,
                  height: window.innerHeight,
                  display: "block",
                  margin: 0,
                }}
              >
                {/*<perspectiveCamera args={[]}/>*/}
                <Suspense fallback={null}>
                  <P404 />
                </Suspense>
              </Canvas>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
