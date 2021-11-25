import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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

  const [homePointer, setHomePointer] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let navigate = useNavigate();
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div
            style={{
              width: windowDimensions.width,
              height: windowDimensions.height,
              cursor: homePointer ? "pointer" : "auto",
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
              <Suspense fallback={null}>
                <Home aux={setHomePointer} navigate={navigate} />
              </Suspense>
            </Canvas>
          </div>
        }
      />
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
  );
};

export default App;
