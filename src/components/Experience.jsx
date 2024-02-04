import React from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { experiences } from '../constants';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          className="w-[70%] h-[70%] object-contain"
          alt={experience.company_name}
        />
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>
    </div>
    <ul className="list-disc mt-5 ml-5 space-y-2">
      {
        experience.points.map((experiencePoint) => (
          <li className="text-white-100 text-[14px] tracking-wider pl-1 my-[15px]">
            {experiencePoint}
          </li>
        ))
      }
    </ul>
  </VerticalTimelineElement >
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" className="mb-20">
        <p className={`${styles.sectionSubText} uppercase text-center`}>what i have done so far</p>
        <h2 className={`${styles.sectionHeadText} capitalize text-center`}>Work Experience.</h2>
      </motion.div>

      <div>
        <VerticalTimeline>
          {
            experiences.map((experience, index) => (
              <ExperienceCard experience={experience} key={`experience-[${index}]`} />
            ))
          }
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experiance");