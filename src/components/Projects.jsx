import { useFrame, useThree } from "@react-three/fiber";
import { Image, useScroll, Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { atom, useAtom } from "jotai";
import { animate, useMotionValue } from "framer-motion";

export const projects = [
  {
    title: "Test1",
    url: "google.com",
    image: "projects/test1.png",
    description: "Description test1",
  },
  {
    title: "Test2",
    url: "frnshr.shop",
    image: "projects/test2.png",
    description: "Description test2",
  },
  {
    title: "Test 3",
    url: "www.google.com",
    image: "projects/test1.png",
    description: "Decription test3",
  },
];

const Project = (props) => {
  const {project, highlighted} = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4)
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh position-z={-0.001} onClick={() => window.open(project.url, "_blank")} ref={background}>
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image scale={[2, 1.2, 1]} url={project.image} toneMapped={false} position-y= {0.3} />
      <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.2} position={[-1, -0.4, 0]}>{project.title.toUpperCase()}</Text>
      <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.1} position={[-1, -0.6, 0]}>{project.description}</Text>
    </group>
  )
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {

  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  const data = useScroll();
  const [section, setSection] = useState(0);

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }
  });


  return <group
    // position-y={-viewport.height * 2 + 1}
    position-y={section === 2 ? 0 : -200}
    >
    {
      projects.map((project, index) => (
        <motion.group key={"project_" + index} position={[
          index * 2.5, 0, -3
        ]}>
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))
    }
  </group>;
};
