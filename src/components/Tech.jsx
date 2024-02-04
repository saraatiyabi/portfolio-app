import React from 'react'
import { technologies } from '../constants';
import BallCanvas from './canvas/Ball';
import { SectionWrapper } from '../HOC';

const Tech = () => (
  <div className="flex justify-center items-center flex-wrap mt-20 gap-10">
    {technologies.map((technology) => (
      <div className="w-28 h-28 object-contain" key={technology.icon}>
        <BallCanvas icon={technology.icon} />
      </div>
    ))}
  </div>
)

export default SectionWrapper(Tech);