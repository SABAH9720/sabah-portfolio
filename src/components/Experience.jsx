import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      period: "May 2024 — Present",
      role: "Coding Instructor · Yalla Learn Academy",
      description:
        "Teach children the fundamentals of programming using Scratch, LEGO Spike, and introductory web technologies. Inspire young minds to explore software development through fun and engaging projects.",
      skills: ["Scratch", "LEGO Spike", "HTML", "CSS", "Education"],
    },
    {
      period: "Dec 2023 — 2025",
      role: "Full Stack Developer · Freelance",
      description:
        "Design, develop, and deploy scalable web applications and REST APIs for various clients using C# .NET MVC, SQL Server, and React. Delivered end-to-end solutions tailored to client needs.",
      skills: [
        "C# .NET",
        "MVC",
        "SQL Server",
        "React",
        "REST APIs",
        "Bootstrap",
      ],
    },
    {
      period: "2020 — 2023",
      role: "Front-End Developer · Freelance",
      description:
        "Built dynamic, responsive websites for clients using React, HTML, CSS, and JavaScript. Focused on delivering clean UI/UX designs and optimized performance for different industries.",
      skills: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
    },
    {
      period: "May 2022 — July 2022",
      role: "WordPress Developer · Media Box (Advertising Agency)",
      description:
        "Developed and maintained custom WordPress themes and plugins for marketing websites. Worked closely with designers to create pixel-perfect web pages.",
      skills: ["WordPress", "PHP", "HTML", "CSS", "JavaScript"],
    },
    {
      period: "2018 — 2019",
      role: "Sales Specialist · OUD Company",
      description:
        "Provided tailored sales solutions and excellent customer service, contributing to increased revenue and client retention in the retail sector.",
      skills: ["Sales", "Customer Service", "Teamwork"],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">Experience</div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item">
  <div className="experience-period">{exp.period}</div>
  <div className="experience-details">
    <h3 className="experience-role">{exp.role}</h3>
    <p className="experience-description">{exp.description}</p>
    <div className="experience-skills">
      {exp.skills.map((skill, idx) => (
        <span key={idx} className="skill-badge">
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
