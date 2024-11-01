import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { portfolio } from "../data"; // Ensure the correct path to your data file
import { SectionWrapper } from "../hoc"; // Ensure the correct path to your HOC
import { styles } from "../styles"; // Ensure the correct path to your styles
import { fadeIn, textVariant } from "../utils/motion"; // Ensure the correct path to your motion utilities

const ProjectCard = ({
  index,
  name,
  description,
  image,
  technologies, // Expecting a string for technologies
  link, // Add link prop
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  // Split technologies into an array for rendering
  const techArray = technologies.split(';').map(tech => tech.trim());

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <img
            src={image}
            alt={name} // Improved accessibility
            className='w-full h-auto object-cover md:rounded-3xl'
          />
        </a>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>
          <a href={link} target="_blank" rel="noopener noreferrer" className='hover:underline'>
            {name}
          </a>
        </h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
        
        {/* Render technologies here, each on a new line */}
        <div className='mt-4'>
          <h4 className='text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold'>Technologies Used:</h4>
          <p className='mt-2 text-gray-300 text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>
            {techArray.map((tech, index) => {
              return (
                <span key={index}>
                  {tech}<br />
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
