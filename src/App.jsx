import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { Theme } from "./components/Theme";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [sunPosition, setSunPosition] = useState([10, -1, 10]);

  return (
    <>
    <MotionConfig transition={{
      ...framerMotionConfig,
    }}>
      <Theme onThemeChange={setSunPosition} sunPosition={sunPosition} />
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Scroll>
            <Experience section={section} sunPosition={sunPosition} />
          </Scroll>
          <Scroll html>
            <Interface setSection={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu onSectionChange={setSection} />
    </MotionConfig>
    <Leva hidden />
    </>
  );
}

export default App;
