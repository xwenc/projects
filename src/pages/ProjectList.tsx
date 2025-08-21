// src/pages/ProjectList.jsx

import ProjectCard from "../components/ProjectCard";
import P1 from "@assets/p1.png";
import P2 from "@assets/p2.png";
const projects = [
  {
    name: "Dapp Deposit",
    description:
      "A decentralized application for depositing and withdrawing funds on the Ethereum blockchain.",
    techStack: ["Solidity", "React", "Tailwind CSS", "ethers.js"],
    skills: [
      "Smart Contract Development",
      "Frontend Development",
      "Blockchain Optimization",
      "Real-time System Design",
    ],
    link: "https://dapp-deposit-2ll.pages.dev",
    img: P1,
  },
  {
    name: "Solana Game ",
    description:
      "A decentralized game built on the Solana blockchain.",
    techStack: ["Solana", "Rust", "React", "Tailwind CSS"],
    skills: [
      "Game Development",
      "Blockchain Integration",
      "Frontend Development",
      "Smart Contract Development",
    ],
    link: "https://gamba-client.vercel.app",
    img: P2,
  },
  // Add more projects...
];

const ProjectList = () => {
  return (
    <div className="container mx-auto md:p-6 max-w-4xl">
      <div className="space-y-4 my-4 md:flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Andy Xiong's Project Experience
        </h1>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/4soho/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://github.com/xwenc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9.024 23.126 9.024 22.813C9.024 22.515 9.01 21.484 9.01 20.259C6 20.859 5.25 19.496 5.25 19.496C4.774 18.803 4.055 18.549 4.055 18.549C3.226 18.074 4.06 18.081 4.06 18.081C4.919 18.134 5.404 18.915 5.404 18.915C6.253 19.938 7.466 19.434 8.024 19.13C8.1 18.328 8.507 17.894 8.941 17.615C6.747 17.328 4.425 16.489 4.425 11.736C4.425 10.583 4.873 9.612 5.587 8.84C5.49 8.553 5.134 7.393 5.743 6.098C5.743 6.098 6.589 5.836 8.979 7.138C9.848 6.931 10.778 6.846 11.71 6.846C12.642 6.846 13.572 6.931 14.441 7.138C16.826 5.836 17.672 6.098 17.672 6.098C18.281 7.393 17.925 8.553 17.828 8.84C18.542 9.612 18.99 10.583 18.99 11.736C18.99 16.489 16.666 17.328 14.461 17.615C14.927 17.916 15.35 18.457 15.35 19.297C15.35 20.379 15.335 21.423 15.335 22.813C15.335 23.126 15.553 23.498 16.152 23.387C20.562 21.8 24 17.302 24 12C24 5.373 18.627 0 12 0Z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="text-gray-700 mb-6">
        Below are some representative projects in blockchain development and web
        development. Feel free to review and discuss them!
      </p>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
