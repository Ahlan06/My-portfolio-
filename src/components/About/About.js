import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import PcSpecs from "./PcSpecs";
import Skills from "./Skills";

function About() {
  const [animatedSections, setAnimatedSections] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.section);
          setTimeout(() => {
            setAnimatedSections(prev => new Set([...prev, index]));
          }, index * 200);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hyprland-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            className="hyprland-section"
            data-section="0"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
              opacity: animatedSections.has(0) ? 1 : 0,
              transform: animatedSections.has(0) ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
          >
            <div style={{
              background: "rgba(20, 20, 30, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(199, 112, 240, 0.3)",
              borderRadius: "16px",
              padding: "40px"
            }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Qui <strong className="purple">Je suis</strong>
              </h1>
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            className="hyprland-section about-img"
            data-section="1"
            style={{ 
              paddingTop: "120px", 
              paddingBottom: "50px",
              opacity: animatedSections.has(1) ? 1 : 0,
              transform: animatedSections.has(1) ? "translateX(0) scale(1)" : "translateX(-40px) scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
            }}
          >
            <div style={{
              background: "rgba(20, 20, 30, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(199, 112, 240, 0.2)",
              borderRadius: "16px",
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <img src={laptopImg} alt="about" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <div 
          className="hyprland-section"
          data-section="2"
          style={{
            opacity: animatedSections.has(2) ? 1 : 0,
            transform: animatedSections.has(2) ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
          }}
        >
          <h1 className="project-heading">
            Compétences <strong className="purple">Professionelles </strong>
          </h1>
          <div style={{
            background: "rgba(20, 20, 30, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(199, 112, 240, 0.25)",
            borderRadius: "16px",
            padding: "30px",
            margin: "20px 0"
          }}>
            <Techstack />
          </div>
        </div>

        <div 
          className="hyprland-section"
          data-section="3"
          style={{
            opacity: animatedSections.has(3) ? 1 : 0,
            transform: animatedSections.has(3) ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s"
          }}
        >
          <h1 className="project-heading">
            <strong className="purple">Mes</strong> Outils
          </h1>
          <div style={{
            background: "rgba(20, 20, 30, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(199, 112, 240, 0.25)",
            borderRadius: "16px",
            padding: "30px",
            margin: "20px 0"
          }}>
            <Toolstack />
          </div>
        </div>

        <div 
          className="hyprland-section"
          data-section="4"
          style={{
            opacity: animatedSections.has(4) ? 1 : 0,
            transform: animatedSections.has(4) ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s"
          }}
        >
          <div style={{
            background: "rgba(20, 20, 30, 0.5)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(199, 112, 240, 0.25)",
            borderRadius: "16px",
            padding: "30px",
            margin: "20px 0"
          }}>
            <PcSpecs />
          </div>
        </div>

        <Skills />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
