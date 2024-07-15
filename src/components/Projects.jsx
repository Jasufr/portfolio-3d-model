import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

export const projects = [
  {
    title: "Coshub",
    url: "https://www.google.com",
    image: "projects/coshub.png",
    description: "Marketplace website for renting cosplays from individuals easily. (Ruby On Rails)",
  },
  {
    title: "FRNSHR",
    url: "https://www.frnshr.shop",
    image: "projects/frnshr.png",
    description: "Interior design tool for finding suitable furniture from several websites based on a specific color scheme. (Ruby On Rails)",
  },
  {
    title: "YourMovieList",
    url: "https://yourmovielist-52b14ea3ac04.herokuapp.com/",
    image: "projects/yml.png",
    description: "Movie watch list with movies from the IMDB API. (Ruby On Rails)",
  },
  {
    title: "GLTF File Viewer",
    url: "https://gltffileviewer.netlify.app/",
    image: "projects/gltffileviewer.png",
    description: "3D Models (GLTF or GLB) Viewer App. (React Vite)",
  },
  {
    title: "GoRent",
    url: "https://gorent-showcase.vercel.app/",
    image: "projects/gorent.png",
    description: "Car rental website, retrieving cars information from APIs. (React NextJS)"
  },
];

const Project = (props) => {
  const { project, highlighted } = props;
  const [isHovered, setIsHovered] = useState(false);

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  const handlePointerOver = () => {
    setIsHovered(true);
    animate(bgOpacity, 0.7);
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  };


  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        ref={background}
      >
        <planeGeometry args={[2.2, 2]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[2, 1.2, 1]}
        url={project.image}
        toneMapped={false}
        position-y={0.3}
      />
      <Text
        maxWidth={2}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.2}
        onClick={() => window.open(project.url, "_blank")}
        position={[-1, -0.4, 0]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        color={isHovered ? "#075985" : "white"}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={2}
        anchorX="left"
        anchorY="top"
        fontSize={0.1}
        position={[-1, -0.6, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 - 1}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, 0, -3]}
          animate={{
            x: 0 + (index - currentProject) * 1.5,
            y: currentProject === index ? 0 : -0.1,
            z: currentProject === index ? -2.2 : -3,
            rotateX: currentProject === index ? 0 : -Math.PI / 3.5,
            rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
          }}
          scale={0.6}
        >
          <Project project={project} highlighted={index === currentProject} onClick={() => setCurrentProject(index)} />
        </motion.group>
      ))}
    </group>
  );
};
