import { motion } from "framer-motion";

const Section = (props) => {
  const {children} = props;

  return (
    <motion.section
      className={`
      h-screen p-8 max-w-screen-2xl mx-auto
      flex flex-col justify-center
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
    <h1 className="text-6xl font-extrabold leading-snug">Bonjour, I am Justin.</h1>
    <p className="text-3xl font-semibold text-gray-700">I am a Front-End Developer.</p>
    <button className="bg-red-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">Contact me</button>
  </Section>
  );
};

const skills = [
  {
    title: "HTML",
    level: 80,
  },
  {
    title: "CSS",
    level: 75,
  },
  {
    title: "JavaScript",
    level: 60,
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
      <div>
        <h2>Skills</h2>
        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <h3>{skill.title}</h3>
              <div>
                <div style={{ width: `${skill.level}%`}}></div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2>Languages</h2>
          <div>
            {languages.map((lng, index) => (
              <div key={index}>
                <h3>{lng.title}</h3>
                <div>
                  <div style={{ width: `${lng.level}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
