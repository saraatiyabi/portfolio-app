import React from 'react'
import { animate, motion } from "framer-motion";
import { styles } from '../styles';
import { textVariant, fadeIn } from './../utils/motion'
import { services } from '../constants';
import Tilt from "react-tilt";
import { SectionWrapper } from '../HOC';

const ServiceCard = ({ title, index, icon }) => (
  <Tilt className="w-full xs:w-[250px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      className="w-full green-pink-gradient rounded-[20px] p-[2px] shadow-card"
    >
      <div className="w-full bg-tertiary min-h-[280px] flex justify-center items-center flex-col gap-10 rounded-[20px] p-5"
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}>
        <img src={icon} alt={title} className="w-16 h-16" />
        <h3 className="font-bold text-[20px] text-center text-white">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show">
        <p className={`${styles.sectionSubText} uppercase`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        className="text-secondary text-[17px] mt-4 leading-[30px] max-w-3xl"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="flex flex-row flex-wrap gap-10 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")