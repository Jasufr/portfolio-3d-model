import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { useMotionValue, animate } from "framer-motion";
import { motion } from "framer-motion-3d"
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";


export const Experience = (props) => {
  const {section} = props;
  const {viewport} = useThree();
  const {animation} = useControls({
    animation: {
      value: "Standing",
    options: ["Standing", "Kneeling", "Walking", "Pointing", "Talking", "Bow"]
    },
  });

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, section === 1 ? 4 : 0);
    animate(cameraLookAtX, section === 1 ? -1 : 0);
  });

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="sunset" />
      <motion.group
        // positison={[0, -1.5, 10]}
        position-y={0.1}
        animate={{
          y: section === 1 ? 0.2 : 0,
          // x: section === 1 ? -10 : 0,
          // z: section === 1 ? 2.8 : 0,
          // y: section === 1 ? -viewport.height : 1,
        }}
      >
        <group scale={[1.4, 1.4, 1.4]} position-y={-1.4}>
        <Avatar animation={section === 0 ? "Standing" : "Talking"} />
        </group>
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
      </motion.group>
    </>
  );
};
