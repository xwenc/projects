// src/components/ProjectCard.jsx
import React from 'react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  skills: string[];
  link?: string;
  img?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow overflow-hidden mt-4'>
    <div className="p-4 md:p-6 flex-1">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-gray-700">Tech Stack:</h4>
        <p className="text-gray-500">{project.techStack.join(', ')}</p>
      </div>
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-gray-700">Skills:</h4>
        <p className="text-gray-500">{project.skills.join(', ')}</p>
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View Project
        </a>
      )}
    </div>
    {project.img && <img src={project.img} className='md:w-1/3 object-cover' />}
    </div>
  );
};

export default ProjectCard;