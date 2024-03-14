import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { motion } from "framer-motion";


export const Experience = (props) => {
  const {section} = props;
  const {animation} = useControls({
    animation: {
      value: "Standing",
    options: ["Standing", "Kneeling", "Walking", "Pointing"]
    },
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <Sky />
      <Environment preset="sunset" />
      <motion.group
        position-y={-1}
        animate={{
          y: section === 0 ? 0 : 1.5,
        }}
      >
        <ContactShadows opacity={0.42} scale={10} blur={1} far={10} resolution={256} color="#000000" />
        <Avatar animation={section === 0 ? "Standing" : "Kneeling"} />
        {/* <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}  >
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh> */}
      </motion.group>
    </>
  );
};
