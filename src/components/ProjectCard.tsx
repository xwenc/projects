// src/components/ProjectCard.jsx
import React from 'react';

interface Project {
  name: string;
  description: string;
  techStack: string[];
  skills: string[];
  link?: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
      <p className="text-gray-600 mb-3">{project.description}</p>
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-gray-700">Stacks:</h4>
        <p className="text-gray-500">{project.techStack.join(', ')}</p>
      </div>
      <div className="mb-3">
        <h4 className="text-sm font-semibold text-gray-700">Skill:</h4>
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
  );
};

export default ProjectCard;