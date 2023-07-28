import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 202</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Master Of Computer Applications"
            subTitle="SuperKing College (2021 - 2024)"
            result="7.8 CGPA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />

          <ResumeCard
            title="Bachelor Of Computer Applications"
            subTitle="D.A.V.V Indore (2018 - 2021)"
            result="82%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
       
          <ResumeCard
            title="Secondary School Education"
            subTitle="Alpha Senior Secondary School (2016 - 2018)"
            result="76%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education