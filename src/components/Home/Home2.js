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
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
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
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
