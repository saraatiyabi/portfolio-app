import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import Tilt from "react-tilt";
import { github } from '../assets';

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 100
        }}
        className="w-full sm:w-[360px] rounded-lg bg-tertiary p-5"
      >
        <div className="w-full h-[230px] relative">
          <img src={image} className="w-full h-full object-cover rounded-lg" />

          <div
            className="flex absolute inset-0 justify-end m-3">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img src={github} alt='github' className="w-1/2 h-1/2" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white text-[24px] font-bold">{name}</h3>
          <p className="text-secondary text-[15px] mt-2">{description}</p>
        </div>

        <div className="mt-5 flex gap-3">
          {tags.map((tag) => (
            <p className={`${tag.color} text-[14px]`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div className="mt-5" variants={textVariant()} initial="hidden" whileInView="show">
        <p className={`${styles.sectionSubText} uppercase`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills and
        experience through real-world examples of
        my work. Each project is briefly described
        with links to code repositories and live
        demos in it. It reflects my ability to
        solve complex problems, work with different
        technologies, and manage projects effectively.
      </motion.p>

      <div className="flex justify-center items-center flex-wrap gap-7 mt-10">
        {projects.map((project, index) => (
          <ProjectCard {...project} index={index} key={`project-[${index}]`} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works,"work");