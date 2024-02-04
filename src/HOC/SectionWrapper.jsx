import React from 'react'
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion'
import { styles } from '../styles';

const SectionWrapper = (Component, idName) => (
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 mt-10`}
            >
                <span id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }
)

export default SectionWrapper;