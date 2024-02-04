import React from 'react'
import { styles } from '../styles'
import { motion } from "framer-motion";
import ComputerCanvas from './canvas/Computers';

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
      <div className={`absolute inset-0 md:top-[110px] top-[120px] max-w-7xl ${styles.paddingX} mx-auto flex flex-row gap-5 items-start`}>
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I &apos;m <span className='text-[#915EFF]'>Sara</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop responsive, modern,<br className="sm:block hidden" />
            well-designed and user friendly<br className="sm:block hidden" />
            web applications
          </p>
        </motion.div>
      </div>

      <ComputerCanvas />
      <div className="absolute bottom-32 xs:bottom-0 w-full flex justify-center items-center">
        <a href='#about'>
          <div className='w-[30px] h-[50px] border-secondary border-4 rounded-2xl flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 18, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero