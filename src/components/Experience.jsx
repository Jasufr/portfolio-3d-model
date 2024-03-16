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

  const cameraPositionY = useMotionValue();
  const cameraLookAtY = useMotionValue();

  useEffect(() => {
    // animate(cameraPositionX, section === 1 ? 4 : 0);
    animate(cameraPositionX, section === 1 ? 0 : 0);
    // animate(cameraLookAtX, section === 1 ? -1 : 0);
    animate(cameraLookAtX, section === 1 ? 0 : 0);

    animate(cameraPositionY, section === 0 ? 0 : section === 1 ? 0 : section === 2 ? 0 : 0);
    animate(cameraLookAtY, section === 1 ? 0 : 0);


  });

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    state.camera.position.y = cameraPositionY.get();
    state.camera.lookAt(cameraLookAtY.get(), 0, 0);
  });

  const rotationSettings = {
    0: [0, 0, 0],
    1: [0, -1, 0],
    2: [0, -1.7, 0],
    3: [0, -0.5, 0],
    4: [0, -0.5, 0],
  };

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Sky /> */}
      {/* <Background /> */}
      <Environment preset="sunset" />
      <motion.group
        position-y={0.1}
        animate={{
          z: -0.5,
          // y: section === 1 ? 0 : section === 2 ? 0 : 0,
          // y: section === 3 ? 1.4 : 0,
        }}
          rotation={rotationSettings[section] || [0, 0, 0]}
      >
        <group scale={[1.4, 1.4, 1.4]} position-y={-1.4}>
        <Avatar
        animation={section === 1 ? "Talking" : section === 2 ? "Kneeling" : section === 3 ? "Bow" : section === 4 ? "Bow" : "Standing"}
        />
      <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        </group>
      </motion.group>
    </>
  );
};

// const Background = () => {
//   return (
//     <canvas id="canvas-webgl" class="p-canvas-webgl"></canvas>
//   );
// };
