import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
         <div className="section-header">About</div>
        <p>
          I’m a software developer passionate about crafting clean, scalable, and
          user-friendly applications that combine thoughtful design with solid
          engineering practices. My favorite work lives at the intersection of
          design and development, where I can create experiences that are not
          only functional but beautifully built for performance and usability.
        </p>

        <p>
          Currently, I’m working as a full-stack developer, focusing on building
          robust web applications and APIs using C# .NET, MVC, and SQL Server. I’ve
          contributed to projects like{" "}
          <a href="https://amjad-raafat.com" target="_blank" rel="noreferrer">
            Amjad-Rafaat.com
          </a>
          , an educational platform with advanced features for teachers, students,
          and administrators, and{" "}
          <a href="https://github.com/SABAH9720?tab=repositories" target="_blank" rel="noreferrer">
            Donority
          </a>
          , a charity management system with both web and mobile interfaces.
        </p>

        <p>
          In the past, I’ve also developed and maintained multiple projects ranging
          from personal branding sites to tools for public transport tracking,
          utilizing frameworks like React, Python Flask, and Bootstrap.
        </p>

        <p>
          Outside of coding, I’m passionate about teaching programming fundamentals
          to children through Scratch and LEGO Spike at{" "}
          <a href="https://yallalearnacademy.com" target="_blank" rel="noreferrer">
            Yalla Learn Academy
          </a>
          . When I’m not coding, you’ll often find me exploring new technologies,
          sharing insights on{" "}
          <a
            href="https://www.facebook.com/profile.php?id=61577895204214"
            target="_blank"
            rel="noreferrer"
          >
            Tech with Sabah
          </a>
          , or reading and working on creative side projects.
        </p>
      </div>
    </section>
  );
}

export default About;
