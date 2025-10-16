import React, { useEffect } from "react";

function Skills() {
  useEffect(() => {
    // Animate progress bars on mount
    const fills = document.querySelectorAll(".skill-progress-fill");
    fills.forEach((fill) => {
      const parent = fill.closest(".skills-item");
      if (!parent) return;
      const data = parent.querySelector("data");
      const value = data ? Number(data.getAttribute("value")) : 0;
      // small timeout for nicer effect
      setTimeout(() => {
        fill.style.width = `${value}%`;
      }, 200);
    });
  }, []);

  return (
    <section className="skill" style={{ marginTop: "40px" }}>
      <h3 className="h3 skills-title">Mes compétences globales</h3>
      <ul className="skills-list content-card">
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Protocoles Réseaux & Sécurité</h5>
            <data value="85">85%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: 0 }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Concéption d'outils et Développement d'outils  </h5>
            <data value="75">75%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: 0 }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Administration Système (Linux/MacOS/Windows)</h5>
            <data value="70">70%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: 0 }}></div>
          </div>
        </li>
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">Analyse de Vulnérabilités (Injection SQL, XSS, etc.)</h5>
            <data value="60">60%</data>
          </div>
          <div className="skill-progress-bg">
            <div className="skill-progress-fill" style={{ width: 0 }}></div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Skills;
