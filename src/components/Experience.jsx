import {  Environment, Sky, Stars, Cloud, useScroll } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useMotionValue, animate } from "framer-motion";
import { motion } from "framer-motion-3d"
import { useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Projects } from "./Projects";
import { framerMotionConfig } from "../config";

export const Experience = (props) => {
  const {sunPosition} = props;
  const {viewport} = useThree();
  const data = useScroll();

  const isMobile = window.innerWidth < 425;

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, section === 0 ? 4 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, section === 0 ? -1 : 0, {
      ...framerMotionConfig
    });
  });

  const [characterAnimation, setCharacterAnimation] = useState("Standing");
  useEffect(() => {
    setCharacterAnimation("Standing");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Standing" : section === 1 ? "Talking" : section === 2 ? "Kneeling" : section === 3 ? "Bow" : "Standing")
    });
  }, [section]),

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  return (
    <>
      <Stars />
      <Sky sunPosition={sunPosition} />
      <Cloud
        segments={12}
        position={[0, -8, -13]}
      />
      <Environment preset="sunset" />
      <motion.group
         animate={"" + section}
         transition={{
           duration: 0.6,
         }}
         variants={{
           0: {
             scaleX: 1.2,
             scaleY: 1.2,
             scaleZ: 1.2,
             y: -0.5,
             x: isMobile? 0.5 : 1,
             z: 1,
             rotateX: 0,
             rotateY: 0,
             rotateZ: 0,
           },
           1: {
             x: isMobile ? 0.3 : 0.5,
             y: -viewport.height - 0.5,
             z: 1,
             rotateX: 0,
             rotateY: -1,
             rotateZ: 0.1,
           },
           2: {
             x: isMobile ? 0.7 : 1,
             y: -viewport.height * 2 - 1,
             z: 0,
             rotateX: 0,
             rotateY: -1.5,
             rotateZ: 0.2
           },
           3: {
             y: -viewport.height * 3 - 0.5,
             x: isMobile ? 0.3 : 0.5,
             z: 1,
             rotateX: 0,
             rotateY: -Math.PI / 8,
             rotateZ: 0,
           },
         }}
      >
        <motion.group>
        <Avatar
          animation={characterAnimation}
        />
        </motion.group>
      </motion.group>
      <Projects />
    </>
  );
};
