import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import PcSpecs from "./PcSpecs";
import Skills from "./Skills";
import ScrollIndicator from "../ScrollIndicator";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", position: 'relative' }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Qui <strong className="purple">Je suis</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          
        </Row>
        
        {/* Scroll indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '40px',
          paddingBottom: '60px'
        }}>
          <div style={{
            width: '28px',
            height: '45px',
            border: '2px solid #c770f0',
            borderRadius: '14px',
            position: 'relative',
            opacity: 0.7,
            animation: 'mouseFloat 2s ease-in-out infinite'
          }}>
            <div style={{
              width: '5px',
              height: '10px',
              background: '#c770f0',
              borderRadius: '3px',
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'scrollDown 2s ease-in-out infinite',
              boxShadow: '0 0 10px rgba(199, 112, 240, 0.3)'
            }}></div>
          </div>
        </div>

        <h1 className="project-heading">
          Compétences <strong className="purple">Professionelles </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Mes</strong> Outils
        </h1>
        <Toolstack />

        <Skills />

        <PcSpecs />

        <Github />
      </Container>
      <ScrollIndicator />
    </Container>
  );
}

export default About;
