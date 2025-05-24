import React from 'react';
import ProjectBox from './ProjectBox';
import RamayanImage from '../images/ramayan.png';

// Using a placeholder image URL for Fruit Ninja project
const fruitNinjaImageURL = "https://via.placeholder.com/300x200.png?text=Fruit+Ninja+Game";

const projectData = [
  {
    projectPhoto: RamayanImage,
    projectName: "Ramayan",
    description: "Simple Ramayan website made using HTML, CSS and JS. This project was made to understand the basic concepts of web development.",
    githubLink: "https://github.com/shahdhairya12/ramayan/",
    websiteLink: "https://sdh-ramayan.netlify.app/"
  },
  {
    projectPhoto: fruitNinjaImageURL,
    projectName: "Fruit Ninja",
    description: "A fun and interactive Fruit Ninja game clone developed using Python, Pygame, and OpenCV, with gesture control powered by MediaPipe.",
    githubLink: "",  // Add link if available
    websiteLink: ""  // Add link if available
  }
];

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {projectData.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
