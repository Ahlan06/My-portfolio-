import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import cyberSecurity from "../../Assets/Projects/blog (1).png";
// protonvpn was used previously for a project image; using chatify.png instead below

function Projects() {
  const [animatedCards, setAnimatedCards] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.project);
          setTimeout(() => {
            setAnimatedCards(prev => new Set([...prev, index]));
          }, index * 150);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hyprland-project-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div style={{
          background: "rgba(20, 20, 30, 0.4)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(199, 112, 240, 0.2)",
          borderRadius: "16px",
          padding: "30px",
          margin: "20px 0",
          textAlign: "center"
        }}>
          <h1 className="project-heading">
            Mes <strong className="purple">Projets </strong>
          </h1>
          <p style={{ color: "white" }}>
            Voici quelques projets sur lesquels j'ai travaillé récemment.
          </p>
        </div>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <div 
              className="hyprland-project-card"
              data-project="0"
              style={{
                opacity: animatedCards.has(0) ? 1 : 0,
                transform: animatedCards.has(0) ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                background: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                padding: "10px",
                height: "100%"
              }}
            >
              <ProjectCard
                imgPath={bitsOfCode}
                isBlog={false}
                title="Nexora"
                description="Nexora est un outil avancé de surveillance et de journalisation système que j'ai réalisé, développé en python sur Visual Studio, ll offre des fonctionnalités complètes de collecte d'informations système, de capture d'écran, de surveillance réseau et de journalisation des processus."
                ghLink="https://github.com/Ahlan06/Nexora-"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div 
              className="hyprland-project-card"
              data-project="1"
              style={{
                opacity: animatedCards.has(1) ? 1 : 0,
                transform: animatedCards.has(1) ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.15s",
                background: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                padding: "10px",
                height: "100%"
              }}
            >
              <ProjectCard
                imgPath={cyberSecurity}
                isBlog={false}
                title="AuditSec"
                description="Site web professionnel proposant mes services de sécurisation d'applications et de parcs informatiques. Je propose également des cours d'initiation à la cybersécurité pour débutants et professionnels souhaitant renforcer leurs compétences en sécurité informatique. Le site est accessible bien qu'il soit en cours de developpement sur certains modules."
                ghLink="https://auditsec.vercel.app/"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div 
              className="hyprland-project-card"
              data-project="2"
              style={{
                opacity: animatedCards.has(2) ? 1 : 0,
                transform: animatedCards.has(2) ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                background: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                padding: "10px",
                height: "100%"
              }}
            >
              <ProjectCard
                imgPath={editor}
                isBlog={false}
                title="Covaciel"
                description="CoVACIEL est un projet compétitif que j'ai réalisé en deuxième année de BTS CIEL. Le but à été de réaliser une voitures autonomes en miniature, afin de participer à une course nationale."
                ghLink="https://pia.ac-paris.fr/serail/jcms/s2_3644538/fr/covaciel"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div 
              className="hyprland-project-card"
              data-project="3"
              style={{
                opacity: animatedCards.has(3) ? 1 : 0,
                transform: animatedCards.has(3) ? "translateY(0) scale(1)" : "translateY(40px) scale(0.9)",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.45s",
                background: "rgba(20, 20, 30, 0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(199, 112, 240, 0.3)",
                borderRadius: "16px",
                padding: "10px",
                height: "100%"
              }}
            >
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Mon portfolio"
                description="Mon portfolio personnel, développé sur Visual Studio et hébergé depuis GitHub Pages. Il présente mes compétences, projets et expériences professionnelles."
                ghLink="https://github.com/Ahlan06/My-portfolio-"
              />
            </div>
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
