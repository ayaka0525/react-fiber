import "./App.css";
import { useRef, Suspense } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const group = useRef();
  const data = useScroll();

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(0, 1 / 3) / 3;
  });

  return (
    <group ref={group}>
      <Image url="./img1.jpg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="./img2.jpg" scale={3} position={[2, 0, 1]} />
      <Image
        url="./img3.jpg"
        scale={[1, 3.5, 1]}
        position={[-2.3, -height, 1]}
      />
      <Image url="./img4.jpg" scale={[1.4, 2, 1]} position={[-1.3, 0, 3.2]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls pages={2} damping={3}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "1.5em" }}>
            Be
          </h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "40vw" }}>
            Create
          </h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
