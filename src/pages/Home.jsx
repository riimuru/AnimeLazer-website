import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import dragon from "../assets/dragon.jpg";
import apk from "../assets/apk_rev.png";
import animeLazer from "../assets/anime-lazer.apk";

const Background = ({ background }) => {
  return (
    <>
      <mesh>
        <planeGeometry args={[19, 10]} />
        <meshBasicMaterial color="#aaa7ff" map={background} />
      </mesh>
    </>
  );
};

const Button = ({ background, aux, navigate }) => {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.x = Math.sin(clock.getElapsedTime()) / 3;
    mesh.current.rotation.y = Math.sin(clock.getElapsedTime()) / 10;
  });
  return (
    <>
      <mesh
        ref={mesh}
        onPointerOver={() => {
          aux(true);
        }}
        onPointerOut={() => {
          aux(false);
        }}
        onClick={() => {
          navigate(animeLazer);
          window.location.reload();
        }}
      >
        <boxGeometry args={[2.7, 2 / 3, 1 / 2]} />
        <meshBasicMaterial map={background} />
      </mesh>
    </>
  );
};

const Home = ({ aux, navigate }) => {
  const animeBackground = useLoader(TextureLoader, dragon);
  const boxBackground = useLoader(TextureLoader, apk);
  return (
    <>
      <Background background={animeBackground} />
      <Button aux={aux} background={boxBackground} navigate={navigate} />
    </>
  );
};

export default Home;
