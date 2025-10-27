import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.home-about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
              background: "rgba(20, 20, 30, 0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(199, 112, 240, 0.2)",
              borderRadius: "16px",
              padding: "40px"
            }}>
              <h1 style={{ fontSize: "2.6em" }}>
                Tout d'abord <span className="purple"> Laissez moi </span> me présenter
              </h1>
              <p className="home-about-body">
              Passionné par l'informatique et les systèmes réseaux depuis que j'utilise Linux
              <br />
              <br />J'ai des notions de base dans des langages comme
              <i>
                <b className="purple"> C++, Javascript ou encore Python. </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont &nbsp;
              <i>
                <b className="purple">l'administration réseau</b> et la recherche de failles dans les systèmes{" "}
                
              </i>
              <br />
              <br />
              Je développe également des sites comme celui-ci via <b className="purple">Visual Studio</b> et je partage des projets sur 
              <i>
                <b className="purple">
                  {" "}
                  github
                </b>
              </i>
              
            </p>
            </div>
          </Col>
          <Col md={4} className="myAvtar">
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0) scale(1)" : "translateX(30px) scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
              background: "rgba(20, 20, 30, 0.4)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(199, 112, 240, 0.2)",
              borderRadius: "16px",
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <div style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
              background: "rgba(20, 20, 30, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(199, 112, 240, 0.2)",
              borderRadius: "16px",
              padding: "40px",
              textAlign: "center",
              marginTop: "30px"
            }}>
              <h1>RETROUVEZ-MOI SUR</h1>
              <p>
                N'hésitez pas à <span className="purple">me contacter </span>ici 
              </p>
              <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahlan06"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahlan-mira-87408b379/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
