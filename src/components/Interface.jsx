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
      flex flex-col w-9/12
      justify-center
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
    <div className="flex flex-col items-center sm:items-start">
    <h1 className="text-4xl sm:text-6xl font-extrabold leading-snug text-sky-800 text-shadow">Bonjour, I am Justin.</h1>
    <motion.p className="text-xl sm:text-3xl font-semibold text-slate-50"
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
    <motion.div className="mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-5 "
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
      <button className="bg-sky-800 text-white py-3 px-7 rounded-lg font-bold text-sm sm:text-lg hover:bg-sky-600 transition-colors duration-200">Contact me</button>
      <div className="flex text-sky-800 text-2xl sm:text-4xl gap-2 sm:gap-5 items-center">
        <a href="https://github.com/Jasufr" target="_blank" className="hover:text-sky-600 transition-colors duration-200"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/justin-etienne/" target="_blank" className="hover:text-sky-600 transition-colors duration-200"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        <a href="https://www.wantedly.com/id/justin_etienne" target="_blank" className="hover:text-sky-600 transition-colors duration-200"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.453 14.555c-.171-.111-.658-.764-2.006-3.982a9.192 9.192 0 0 0-.237-.526l-.274-.664l-2.362-5.702H8.85l2.362 5.702l2.362 5.706l2.181 5.267a.196.196 0 0 0 .362 0l2.373-5.682a.1.1 0 0 0-.037-.119m-8.85 0c-.171-.111-.658-.764-2.006-3.982a8.971 8.971 0 0 0-.236-.525l-.276-.665l-2.36-5.702H0l2.362 5.702l2.362 5.706l2.181 5.267a.196.196 0 0 0 .362 0l2.374-5.682a.098.098 0 0 0-.038-.119M24 6.375a2.851 2.851 0 0 1-2.851 2.852a2.851 2.851 0 0 1-2.852-2.852a2.851 2.851 0 0 1 2.852-2.851A2.851 2.851 0 0 1 24 6.375"/></svg></a>
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
      <motion.div className="w-full" whileInView={"visible"}>
        <h2 className="text-3xl sm:text-5xl font-bold text-sky-800 text-shadow">Skills</h2>
        <div className="mt-4 space-y-4">
          {skills.map((skill, index) => (
            <div className="sm:w-64" key={index}>
              <motion.h3 className="text-lg sm:text-xl font-bold text-slate-50"
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
              <div className="h-2 w-full bg-gray-200 rounded-full sm:mt-2">
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
          <h2 className="text-3xl sm:text-5xl font-bold mt-6 sm:mt-10 text-sky-800 text-shadow">Languages</h2>
          <div className="mt-4 space-y-4">
            {languages.map((lng, index) => (
            <div className="sm:w-64" key={index}>
            <motion.h3 className="text-sm sm:text-lg  font-bold text-slate-50"
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
            <div className="h-2 w-full bg-gray-200 rounded-full sm:mt-2">
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
      </motion.div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl text-sky-800 text-shadow font-bold">Contact me</h2>
      <SendMail />
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
      <div className="flex flex-col items-center w-full h-full justify-around sm:justify-start gap-32 sm:gap-2 mt-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-sky-800 text-shadow">Projects</h2>
        <div className="flex gap-24 sm:gap-52 items-end mb-4">
           <button
          className="hover:text-sky-600 self-start transition-colors text-lg sm:text-2xl font-bold text-sky-800 text-shadow"
          onClick={previousProject}
        >
          Previous
        </button>
        <button
          className="hover:text-sky-600 transition-colors self-start text-lg sm:text-2xl font-bold text-sky-800 text-shadow"
          onClick={nextProject}
        >
          Next
        </button>
        </div>

      </div>
    </Section>
  );
};
