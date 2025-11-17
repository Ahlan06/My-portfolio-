import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ 
              fontSize: "2.8em", 
              fontWeight: '700',
              marginBottom: '40px',
              lineHeight: '1.3'
            }}>
              Laissez-moi <span className="purple">me présenter</span>
            </h1>
            <p className="home-about-body" style={{ 
              fontSize: '1.1em', 
              lineHeight: '1.8',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              Passionné par l'informatique et les systèmes réseaux depuis que j'utilise Linux.
              <br />
              <br />J'ai des compétences dans des langages tels que
              <i>
                <b className="purple"> C++, JavaScript et Python</b>
              </i>
              , que j'utilise pour développer des solutions innovantes.
              <br />
              <br />
              Mes domaines d'expertise incluent&nbsp;
              <i>
                <b className="purple">l'administration réseau</b> et <b className="purple">la cybersécurité</b>
              </i>
              , avec un focus particulier sur le pentesting et la recherche de vulnérabilités.
              <br />
              <br />
              Je développe également des applications web modernes avec <b className="purple">React</b> et
              <i>
                <b className="purple"> Node.js</b>
              </i>
              , et je partage mes projets open-source sur GitHub.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              transitionSpeed={2000}
            >
              <div style={{
                background: 'rgba(199, 112, 240, 0.1)',
                borderRadius: '20px',
                padding: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(199, 112, 240, 0.2)',
                boxShadow: '0 8px 32px rgba(199, 112, 240, 0.15)'
              }}>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row style={{ marginTop: '80px' }}>
          <Col md={12} className="home-about-social">
            <h1 style={{ 
              fontSize: '2.2em', 
              fontWeight: '700',
              marginBottom: '20px'
            }}>RETROUVEZ-MOI SUR</h1>
            <p style={{ 
              fontSize: '1.1em',
              marginBottom: '30px',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              N'hésitez pas à <span className="purple">me contacter</span> pour collaborer
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahlan06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahlan-mira-87408b379/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
