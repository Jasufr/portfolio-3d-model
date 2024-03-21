import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { SendMail } from "./SendMail";

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
    <div>
    <h1 className="text-6xl font-extrabold leading-snug text-slate-500 text-shadow">Bonjour, I am Justin.</h1>
    <motion.p className="text-3xl font-semibold text-slate-300"
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
              <motion.h3 className="text-xl font-bold text-slate-300"
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
            <motion.h3 className="text-xl font-bold text-slate-300"
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
      <div className="pt-3 rounded-md w-96 max-w-full">
      <p className="successMessage hidden text-green-300 font-bold pt-1">Thank you! I will get back to you as soon as possible.</p>
      <p className="fillInError hidden text-red-600 font-bold p-1">Please fill in all the inputs.</p>
      <div>
          <label htmlFor="name" className="font-medium text-slate-300 block mb-1">
            Name/Company
          </label>
          <input
            required
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
          />
          <label
            htmlFor="email"
            className="font-medium text-slate-300 block mb-1 mt-6"
          >
            Email Address
          </label>
          <input
            required
            type="email"
            name="email"
            id="email_id"
            className="block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
          />
          <p className="emailError hidden text-red-600 font-bold p-1">Please enter a valid email address.</p>
          <label
            htmlFor="message"
            className="font-medium text-slate-300 block mb-1 mt-6"
          >
            Message
          </label>
          <textarea
            required
            name="message"
            id="message"
            className="max-h-32 block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
          />
          <button  onClick={() => SendMail()} id="sendButton" className="bg-sky-800 hover:bg-sky-600 transition-colors duration-200 text-white py-4 px-8 rounded-lg font-bold text-lg mt-10 ">
            Submit
          </button>
        </div>
      </div>
    </Section>
  );
};
