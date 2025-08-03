import project1 from '../assets/images/project-1.jpeg';

export const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    img: project1,
    des: "A responsive personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and resume.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    name: "E-commerce Store",
    img: project1,
    des: "An e-commerce application with product listings, cart functionality, and user authentication using React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Event Management System",
    img: project1,
    des: "A full-stack application for creating, joining, and managing events with role-based access, built using .NET Core and React.",
    tech: [".NET Core", "React", "SQL Server", "Bootstrap"],
  },
  {
    id: 4,
    name: "Deepfake Detection",
    img: project1,
    des: "A machine learning project using CNN and transfer learning to detect GAN and diffusion-based deepfake images.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Jupyter Notebook"],
  },
];

export default projects;
