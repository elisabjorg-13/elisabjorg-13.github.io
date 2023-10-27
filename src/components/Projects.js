import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto">
      <p className="text-3xl font-semibold mb-4">Projects</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;