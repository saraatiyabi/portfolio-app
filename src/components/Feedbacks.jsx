import React from 'react'
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { testimonials } from '../constants';

const FeedbackCard = ({ testimonial, name, designation, company, image, index }) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.8)}
    className="bg-black-200 rounded-3xl p-10 w-full sm:w-[320px]"
  >
    <p className="text-white font-black text-[40px]">"</p>

    <div className="mt-2">
      <p className="text-white text-[20px]">{testimonial}</p>
    </div>

    <div className="flex justify-between items-center mt-5">
      <div className="flex flex-1 flex-col">
        <p className="text-white text-[15px]"><span className="blue-text-gradient mr-1">@</span>{name}</p>
        <p className="text-[12px] text-secondary">{designation} of {company}</p>
      </div>
      <img src={image} className="w-[50px] h-[50px] rounded-full" />
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className="mt-10 bg-black-100 rounded-2xl">
      <div className={`w-full bg-tertiary min-h-[300px] rounded-2xl ${styles.padding}`}>
        <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show">
          <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} flex flex-wrap gap-7 -mt-20 pb-10`}>
        {testimonials.map((feedback, index) => (
          <FeedbackCard key={feedback.name} {...feedback} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks);