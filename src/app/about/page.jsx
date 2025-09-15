"use client";

import Image from "next/image";
import { useRef } from "react";
import { useInView, useScroll, motion } from "framer-motion";

import Brain from "@/components/Brain";
import ExperienceItem from "@/components/ExperienceItem";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import ScrollSvg from "@/components/ScrollSvg";
import Skill from "@/components/Skill";

const highlights = [
    "Technical Proficiency: In-depth knowledge of Next.js, React, and the MERN stack.",
    "Problem Solver: Strong analytical mindset with innovative solution design.",
    "Performance Optimization: Expertise in fine-tuning apps for speed and smooth UX.",
    "Team Player: Effective communicator, excels in cross-functional collaboration.",
    "Agile Methodology: Experienced in Agile practices and Git workflows.",
    "Responsive Design: Skilled in creating mobile-friendly, consistent experiences.",
    "Debugging & Troubleshooting: Quick issue identification and resolution.",
    "Continuous Learning: Always up-to-date with latest trends and best practices.",
    "Passion for Next.js: Enthusiastic about building modern, feature-rich apps.",
  ];

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <PageTransitionProvider>
      <div
        className="h-full overflow-scroll lg:flex overflow-x-hidden"
        ref={containerRef}
      >
        {/* text */}
        <div className="container flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">Biography</h1>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
        {highlights.map((item, index) => (
          <li key={index} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
            <span className="italic">
              My work is marked by a commitment to quality, performance, and ongoing learning in the rapidly evolving field of web development.
            </span>
            
            <ScrollSvg />
          </div>

          {/* skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>
            {/* list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView && { x: 0 }}
              className="flex gap-4 flex-wrap"
            >
              <Skill title="Python" />
              <Skill title="Javascript" />
              <Skill title="TypeScript" />
              <Skill title="React.js" />
              <Skill title="Next.js" />
              <Skill title="Tailwind CSS" />
              <Skill title="MongoDB" />
              <Skill title="Node.js" />
              <Skill title="Express.js" />
              <Skill title="GraphQL" />
              <Skill title="Framer Motion" />
              <Skill title="Git" />
              <Skill title="Figma" />
               <Skill title="Docker" />
            </motion.div>
            {/* scroll svg */}
            <ScrollSvg />
          </div>
          {/* experience */}
          <div
            ref={experienceRef}
            className="flex flex-col gap-12 justify-center pb-48 "
          >
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h1>
            {/* list */}
            <motion.div
              initial={{ x: "200vw" }}
              animate={isExperienceRefInView && { x: 0 }}
              transition={{ delay: 0.5 }}
              className=""
            >
              {/* list item */}
               <ExperienceItem
                side="left"
                title="Python Senior Developer"
                description="Expert in Python, frameworks as Django, mentoring, problem-solving, team collaboration."
                date="2019 -"
                company="Freelancer"
              />
              <ExperienceItem
                side="right"
                title="JavaScript Senior Developer"
                description="Expert in JS, frameworks, mentoring, problem-solving, team collaboration."
                date="2019 -"
                company="Freelancer"
              />
              <ExperienceItem
                side="left"
                title=" Senior React Developer"
                description=" I spearheaded React-based application development,
                    leveraging advanced skills."
                date="2019 - 2023"
                company="Freelancer"
              />
              <ExperienceItem
                side="right"
                title="Senior Next.js Developer"
                description="I provided web solutions, applying a range of technologies
                    to address client requirements."
                date="2023 - 2025"
                company="Freelancer"
              />
            </motion.div>
          </div>
        </div>
        {/* svg */}

        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </PageTransitionProvider>
  );
};

export default AboutPage;
