import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { Theme } from "./components/Theme";

function App() {
  const [section, setSection] = useState(0);
  const [sunPosition, setSunPosition] = useState([10, -1, 10]);

  return (
    <>
      <Theme onThemeChange={setSunPosition} sunPosition={sunPosition} />
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Experience section={section} sunPosition={sunPosition} />
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} />
      {/* <Leva hidden /> */}
    </>
  );
}

export default App;
