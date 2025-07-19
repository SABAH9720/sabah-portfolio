import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Amjad-Rafaat.com",
    description:
      "An educational platform with admin and student dashboards, lesson and quiz management, secure payment system, and video uploads.",
    tags: ["C#", ".NET MVC", "REST APIs", "SQL Server", "Entity Framework"],
    link: "https://amjad-raafat.com",
  },
  {
    title: "Donority",
    description:
      "A donation and charity management system for web and mobile with easy donor tracking and charity workflows.",
    tags: [".NET Core", "React", "SQL Server"],
    link: "https://github.com/SABAH9720",
  },
  {
    title: "Bus Finder",
    description:
      "A web app to find and manage buses in real time with search, add, and delete functionality.",
    tags: ["HTML", "CSS", "JavaScript", "Python Flask"],
    link: "https://github.com/SABAH9720/BusFinder",
  },
  {
    title: "Yalla Learn Academy",
    description:
      "A branding site for teaching kids programming using Scratch and LEGO robotics. Single page React app.",
    tags: ["React", "Bootstrap", "JavaScript"],
    link: "https://yallalearnacademy.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header">Projects</div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
