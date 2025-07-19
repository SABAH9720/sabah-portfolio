import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="intro">
        <h1 className="slide-in">Sabah Mohamed</h1>
        <p className="role slide-in-delay">Software Engineer</p>
        <p className="description slide-in-delay2">
          I craft clean, scalable, pixel-perfect web apps & APIs.
        </p>
      </div>

      <nav>
        <ul className="menu">
          {["ABOUT", "EXPERIENCE", "PROJECTS"].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
<div className="social-icons-column">
    <a href="https://github.com/SABAH9720" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="www.linkedin.com/in/sabah-mohamed-a8834016b" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61577895204214" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="mailto:sabahmohamed9720@gmail.com">
      <i className="fas fa-envelope"></i>
    </a>
  </div>
  </aside>
  );
}

export default Sidebar;
