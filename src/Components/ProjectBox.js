import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, description, githubLink, websiteLink }) => {
  const show = githubLink ? "inline-block" : "none";

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt={`${projectName} display`} />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{description}</p>
        <br />
        {githubLink && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
        {websiteLink && (
          <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
