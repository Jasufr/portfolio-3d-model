import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { SendMail } from "./SendMail";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

const Section = (props) => {
  const {children} = props;

  return (
    <motion.section
      className={`
      h-screen p-8 max-w-screen-2xl mx-auto
      flex flex-col justify-center w-9/12
      `}

      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  )
}

export const Interface = () => {
  return <>
    <div className="flex flex-col items-center w-screen">
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    </div>
  </>;
};

const AboutSection = () => {
  return (
  <Section>
    <div>
    <h1 className="text-6xl font-extrabold leading-snug text-slate-500 text-shadow">Bonjour, I am Justin.</h1>
    <motion.p className="text-3xl font-semibold text-slate-50"
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
      delay: 1,
    }}>Front-end Developer based in Tokyo.<br></br>JavaScript and 3D enthousiast.</motion.p>
    <motion.div className="mt-10 flex gap-5 self-end"
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 0.5,
      delay: 1.5,
    }}>
      <button className="bg-sky-800 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-sky-600 transition-colors duration-200">Contact me</button>
      <div className="flex flex-col text-sky-800 text-2xl">
        <a href="https://github.com/Jasufr" target="_blank" className="hover:text-sky-600 transition-colors duration-200"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/justin-etienne/" target="_blank" className="hover:text-sky-600 transition-colors duration-200"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </div>
      </motion.div>
    </div>
  </Section>
  );
};

const skills = [
  {
    title: "HTML/CSS",
    level: 95,
  },
  {
    title: "Bootstrap",
    level: 80,
  },
  {
    title: "JavaScript",
    level: 75,
  },
  {
    title: "Ruby on Rails",
    level: 70,
  },
  {
    title: "React.js",
    level: 45,
  },
];

const languages = [
  {
    title: "French",
    level: 101,
  },
  {
    title: "English",
    level: 90,
  },
  {
    title: "Japanese",
    level: 85,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold text-slate-500 text-shadow">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3 className="text-xl font-bold text-slate-50"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.5 + index * 0.2,
                    }
                  },
                }}
              >{skill.title}</motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div className="h-full bg-sky-800 rounded-full" style={{ width: `${skill.level}%`}}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition:{
                        duration: 1,
                        delay: 0.5 + index * 0.2,
                      }
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-5xl font-bold mt-10 text-slate-500 text-shadow">Languages</h2>
          <div>
            {languages.map((lng, index) => (
            <div className="w-64" key={index}>
            <motion.h3 className="text-xl font-bold text-slate-50"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1.5 + index * 0.2,
                  }
                },
              }}
            >{lng.title}</motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div className="h-full bg-sky-800 rounded-full" style={{ width: `${lng.level}%`}}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition:{
                      duration: 1,
                      delay: 1.5 + index * 0.2,
                    }
                  },
                }}
              ></motion.div>
            </div>
          </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-5xl text-slate-500 text-shadow font-bold">Contact me</h2>
      <SendMail /> {/* Render the SendMail component */}
    </Section>
  );
};

const ProjectsSection = () => {

  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom)
  const nextProject=() => {
    setCurrentProject((currentProject + 1) % projects.length)
  };
  const previousProject=() => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length)
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 justify-center">
        <a
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          Previous
        </a>
        <h2 className="text-5xl font-bold">Projects</h2>
        <a
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next
        </a>
      </div>
    </Section>
  );
};
