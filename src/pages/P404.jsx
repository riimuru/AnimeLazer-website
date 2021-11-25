import React, { useRef, useState, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import starry from "../assets/starry_background.jpg";
//import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

const Four1 = ({ width, height }) => {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();

  useFrame(({ clock }) => {
    mesh1.current.rotation.y = Math.sin(clock.getElapsedTime());
    mesh2.current.rotation.y = Math.sin(clock.getElapsedTime());
    mesh3.current.rotation.y = Math.sin(clock.getElapsedTime());
  });

  // if(width>= 1570){

  // }

  return (
    <>
      <mesh ref={mesh1} position={[-4, 0, 0]}>
        <boxGeometry args={[2 / 3, 5 / 3, 2 / 3]} />
        <meshNormalMaterial color="green" />
      </mesh>
      <mesh ref={mesh2} position={[-3.3, -2 / 4, 0]}>
        <boxGeometry args={[1, 2 / 3, 2 / 3]} />
        <meshNormalMaterial color="blue" />
      </mesh>
      <mesh ref={mesh3} position={[-16 / 6, -5 / 9, 0]}>
        <boxGeometry args={[2 / 3, 2.7, 2 / 3]} />
        <meshNormalMaterial color="purple" />
      </mesh>
    </>
  );
};

const Zero = (width, height) => {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  const mesh4 = useRef();
  const mesh5 = useRef();
  useFrame(({ clock }) => {
    mesh1.current.rotation.y = Math.cos(clock.getElapsedTime());
    mesh2.current.rotation.y = Math.cos(clock.getElapsedTime());
    mesh3.current.rotation.x = Math.tan(clock.getElapsedTime());
    mesh4.current.rotation.y = Math.cos(clock.getElapsedTime());
    mesh5.current.rotation.y = Math.cos(clock.getElapsedTime());
  });
  return (
    <>
      <mesh ref={mesh1} position={[-1 / 2, -5 / 9, 0]}>
        <boxGeometry args={[2 / 3, 2.7, 2 / 3]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={mesh2} position={[1 / 6, 0.463, 0]}>
        <boxGeometry args={[2 / 3, 2 / 3, 2 / 3]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={mesh3} position={[1 / 6, -0.5, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={mesh4} position={[1 / 6, -1.57, 0]}>
        <boxGeometry args={[2 / 3, 2 / 3, 2 / 3]} />
        <meshNormalMaterial />
      </mesh>
      <mesh ref={mesh5} position={[5 / 6, -5 / 9, 0]}>
        <boxGeometry args={[2 / 3, 2.7, 2 / 3]} />
        <meshNormalMaterial />
      </mesh>
    </>
  );
};

const Four2 = ({ width, height }) => {
  const mesh1 = useRef();
  const mesh2 = useRef();
  const mesh3 = useRef();
  useFrame(({ clock }) => {
    mesh1.current.rotation.y = Math.sin(clock.getElapsedTime());
    mesh2.current.rotation.y = Math.sin(clock.getElapsedTime());
    mesh3.current.rotation.y = Math.sin(clock.getElapsedTime());
  });
  return (
    <>
      <mesh ref={mesh1} position={[3, 0, 0]}>
        <boxGeometry args={[2 / 3, 5 / 3, 2 / 3]} />
        <meshNormalMaterial color="green" />
      </mesh>
      <mesh ref={mesh2} position={[3.7, -2 / 4, 0]}>
        <boxGeometry args={[1, 2 / 3, 2 / 3]} />
        <meshNormalMaterial color="blue" />
      </mesh>
      <mesh ref={mesh3} position={[13 / 3, -5 / 9, 0]}>
        <boxGeometry args={[2 / 3, 2.7, 2 / 3]} />
        <meshNormalMaterial color="purple" />
      </mesh>
    </>
  );
};

const Background = ({ starryBackground, width, height }) => {
  console.log(height + ", " + width);
  return (
    <mesh>
      <planeGeometry args={[19, 10]} />
      <meshBasicMaterial map={starryBackground} />
    </mesh>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const P404 = (props) => {
  //const font = useLoader(FontLoader, "/bold.blob");
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
  const starryBackground = useLoader(TextureLoader, starry);
  return (
    <>
      <Background
        starryBackground={starryBackground}
        height={windowDimensions.height}
        width={windowDimensions.width}
      />
      <Four1 width={windowDimensions.width} height={windowDimensions.height} />
      <Zero width={windowDimensions.width} height={windowDimensions.height} />
      <Four2 width={windowDimensions.width} height={windowDimensions.height} />
    </>
  );
};

export default P404;
