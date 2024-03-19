import { motion } from "framer-motion";

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
    <Section>
      <h1>Projects</h1>
    </Section>
    <ContactSection />
    </div>
  </>;
};

const AboutSection = () => {
  return (
  <Section>
    <div className="bg-slate-100/50 py-4 px-8">
    <h1 className="text-6xl font-extrabold leading-snug">Bonjour, I am Justin.</h1>
    <motion.p className="text-3xl font-semibold text-gray-700"
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      delay: 1.5,
    }}>I am a Front-End Developer.</motion.p>
    <motion.button className="bg-red-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
    initial={{
      opacity: 0,
      y: 25,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1,
      delay: 2,
    }}>Contact me</motion.button>
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
    level: 100,
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
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="mt-8 space-y-4">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3 className="text-xl font-bold text-gray-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    }
                  },
                }}
              >{skill.title}</motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div className="h-full bg-indigo-500 rounded-full" style={{ width: `${skill.level}%`}}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition:{
                        duration: 1,
                        delay: 1 + index * 0.2,
                      }
                    },
                  }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4">
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div>
            {languages.map((lng, index) => (
            <div className="w-64" key={index}>
            <motion.h3 className="text-xl font-bold text-gray-800"
              initial={{
                opacity: 0,
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 2 + index * 0.2,
                  }
                },
              }}
            >{lng.title}</motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lng.level}%`}}
                initial={{
                  scaleX: 0,
                  originX: 0,
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition:{
                      duration: 1,
                      delay: 2 + index * 0.2,
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
      <h1>Blablabla contact me form</h1>
    </Section>
  );
};
